import { sanityClient, isSanityConfigured } from "../client";
import { SITE_CONTENT_QUERY } from "../queries/content";

export async function fetchSiteContent({ signal } = {}) {
  if (!isSanityConfigured || !sanityClient) return {};

  const content = await sanityClient.fetch(
    SITE_CONTENT_QUERY,
    {},
    { signal, cache: "no-store" },
  );

  return content && typeof content === "object" ? content : {};
}

