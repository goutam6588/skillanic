import { useCallback, useEffect, useState } from "react";
import { isSanityConfigured } from "../sanity/client";
import { fetchSiteContent } from "../sanity/services/contentService";
import { ContentContext } from "./contentContext";

const readInitialMeta = (attribute, key) =>
  typeof document === "undefined"
    ? null
    : document.head
        .querySelector(`meta[${attribute}="${key}"]`)
        ?.getAttribute("content") ?? null;

const INITIAL_METADATA = {
  title: typeof document === "undefined" ? "" : document.title,
  description: readInitialMeta("name", "description"),
  ogTitle: readInitialMeta("property", "og:title"),
  ogDescription: readInitialMeta("property", "og:description"),
  ogImage: readInitialMeta("property", "og:image"),
};

export function ContentProvider({ children }) {
  const [state, setState] = useState({
    data: {},
    status: isSanityConfigured ? "loading" : "disabled",
    error: null,
  });
  const [refreshKey, setRefreshKey] = useState(0);

  const refresh = useCallback(() => setRefreshKey((key) => key + 1), []);

  useEffect(() => {
    if (!isSanityConfigured) return undefined;

    const controller = new AbortController();

    fetchSiteContent({ signal: controller.signal })
      .then((data) => setState({ data, status: "ready", error: null }))
      .catch((error) => {
        if (error?.name === "AbortError") return;
        setState({ data: {}, status: "error", error });
      });

    return () => controller.abort();
  }, [refreshKey]);

  // Re-fetch when the browser tab becomes visible again so freshly published
  // Sanity content (new courses, updated PDFs, etc.) appears without a manual reload.
  useEffect(() => {
    if (!isSanityConfigured) return undefined;
    const handleVisibility = () => {
      if (document.visibilityState === "visible") {
        setRefreshKey((k) => k + 1);
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  useEffect(() => {
    const seo = state.data?.siteSettings?.seo;

    const updateMeta = (attribute, key, value) => {
      let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
      if (!value?.trim()) {
        if (element?.dataset.sanityManaged === "true") element.remove();
        return;
      }
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        element.dataset.sanityManaged = "true";
        document.head.append(element);
      }
      element.setAttribute("content", value.trim());
    };

    const defaults = INITIAL_METADATA;
    document.title = seo?.title?.trim() || defaults.title;
    updateMeta("name", "description", seo?.description || defaults.description);
    updateMeta("property", "og:title", seo?.title || defaults.ogTitle);
    updateMeta("property", "og:description", seo?.description || defaults.ogDescription);
    updateMeta("property", "og:image", seo?.image || defaults.ogImage);
  }, [state.data]);

  return (
    <ContentContext.Provider value={{ ...state, refresh }}>
      {children}
    </ContentContext.Provider>
  );
}
