import { createClient } from "@sanity/client";

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID?.trim();
const dataset = import.meta.env.VITE_SANITY_DATASET?.trim();
const apiVersion =
  import.meta.env.VITE_SANITY_API_VERSION?.trim() || "2025-02-19";

export const isSanityConfigured = Boolean(projectId && dataset);

export const sanityConfig = {
  projectId,
  dataset,
  apiVersion,

  useCdn: true,
  perspective: "published",
};

export const sanityClient = isSanityConfigured
  ? createClient(sanityConfig)
  : null;
