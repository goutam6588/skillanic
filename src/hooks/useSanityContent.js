import { useContext } from "react";
import {
  hasContent,
  mergeCollectionWithFallback,
  mergeWithFallback,
} from "../content/fallback/mergeContent";
import { ContentContext } from "../context/contentContext";

export const readPath = (source, path) => {
  if (!source || typeof path !== "string") return undefined;
  const normalizedPath = path.replace(/\[(\d+)\]/g, ".$1").trim();
  if (!normalizedPath) return undefined;
  const keys = normalizedPath.split(".").filter(Boolean);
  return keys.reduce((value, key) => value?.[key], source);
};

export function useSanityContent(path, defaultValue, options = {}) {
  const context = useContext(ContentContext) ?? {};
  const opts = options ?? {};
  const sanityValue = readPath(context.data, path);
  const hasSanity = hasContent(sanityValue);

  const value = opts.collection
    ? mergeCollectionWithFallback(defaultValue, sanityValue, opts)
    : mergeWithFallback(defaultValue, sanityValue);

  const errorMessage = context.error
    ? context.error.message || context.error.name || String(context.error)
    : null;

  console.log(`[useSanityContent:${context.status ?? "disabled"}] Debug path: "${path}"`, {
    status: context.status ?? "disabled",
    hasSanityContent: hasSanity,
    sanityValue,
    defaultValue,
    resolvedValue: value,
    contextDataKeys: Object.keys(context.data ?? {}),
    contextData: context.data,
    error: errorMessage,
    rawError: context.error,
  });

  return {
    value,
    status: context.status ?? "disabled",
    error: context.error ?? null,
    refresh: context.refresh ?? (() => { }),
    hasSanityContent: hasSanity,
  };
}


