const isPlainObject = (value) => {
  if (value === null || typeof value !== "object" || Array.isArray(value)) {
    return false;
  }

  const prototype = Object.getPrototypeOf(value);
  return prototype === Object.prototype || prototype === null;
};

export const hasContent = (value) => {
  if (value === null || value === undefined) return false;
  if (typeof value === "string") return value.trim().length > 0;
  if (typeof value === "number") return Number.isFinite(value);
  if (typeof value === "boolean") return true;
  if (Array.isArray(value)) return value.some(hasContent);
  if (isPlainObject(value)) return Object.values(value).some(hasContent);
  return true;
};

/**
 * Applies Sanity as an override layer without allowing empty CMS values to
 * erase the website's permanent defaults.
 */
export function mergeWithFallback(defaultValue, sanityValue) {
  if (!hasContent(sanityValue)) return defaultValue;

  if (Array.isArray(defaultValue) || Array.isArray(sanityValue)) {
    if (!Array.isArray(sanityValue) || !sanityValue.some(hasContent)) {
      return defaultValue;
    }

    const defaults = Array.isArray(defaultValue) ? defaultValue : [];
    return sanityValue
      .filter(hasContent)
      .map((item, index) => mergeWithFallback(defaults[index], item));
  }

  if (isPlainObject(defaultValue) && isPlainObject(sanityValue)) {
    const keys = new Set([
      ...Object.keys(defaultValue),
      ...Object.keys(sanityValue),
    ]);

    return Object.fromEntries(
      [...keys].map((key) => [
        key,
        mergeWithFallback(defaultValue[key], sanityValue[key]),
      ]),
    );
  }

  return sanityValue;
}

const comparableKey = (value) => {
  if (!hasContent(value)) return null;
  if (isPlainObject(value) && hasContent(value.current)) return value.current;
  return String(value).trim().toLowerCase();
};

const findMatchingDefault = (defaults, override, matchBy) => {
  for (const field of matchBy) {
    const overrideKey = comparableKey(override?.[field]);
    if (overrideKey === null) continue;

    const match = defaults.find(
      (item) => comparableKey(item?.[field]) === overrideKey,
    );
    if (match) return match;
  }

  return undefined;
};

/**
 * A non-empty Sanity collection replaces the default collection at section
 * level. Each matching item is still field-merged with its default so a
 * partially configured course/testimonial/etc. cannot render blank fields.
 */
export function mergeCollectionWithFallback(
  defaultItems,
  sanityItems,
  {
    matchBy = ["id", "legacyId", "_key", "slug"],
    fallbackByIndex = true,
    isValidItem = () => true,
  } = {},
) {
  const defaults = Array.isArray(defaultItems) ? defaultItems : [];
  if (!Array.isArray(sanityItems)) return defaults;

  const usableOverrides = sanityItems.filter(hasContent);
  if (usableOverrides.length === 0) return defaults;

  const mergedItems = usableOverrides.map((override, index) => {
    const matchedDefault = findMatchingDefault(defaults, override, matchBy);
    const fallback = matchedDefault ?? (fallbackByIndex ? defaults[index] : undefined);
    return mergeWithFallback(fallback, override);
  });

  const validItems = mergedItems.filter(isValidItem);
  return validItems.length > 0 ? validItems : defaults;
}
