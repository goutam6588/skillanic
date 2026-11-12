import { sanityConfig } from "./client";

const isHttpUrl = (value) => {
  if (typeof value !== "string" || value.trim().length === 0) return false;

  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
};

const urlFromAssetRef = (reference) => {
  if (!reference || !sanityConfig.projectId || !sanityConfig.dataset) return null;

  const match = reference.match(/^image-([a-zA-Z0-9]+)-(\d+x\d+)-([a-zA-Z0-9]+)$/);
  if (!match) return null;

  const [, assetId, dimensions, extension] = match;
  return `https://cdn.sanity.io/images/${sanityConfig.projectId}/${sanityConfig.dataset}/${assetId}-${dimensions}.${extension}`;
};

/** Accepts projected URLs as well as regular Sanity image objects. */
export function getSanityImageUrl(image, fallback = "") {
  const candidates = [
    image,
    image?.url,
    image?.asset?.url,
    urlFromAssetRef(image?.asset?._ref),
  ];

  const validUrl = candidates.find(isHttpUrl);
  return validUrl || fallback;
}

