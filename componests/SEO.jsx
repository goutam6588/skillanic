import { Helmet } from "react-helmet-async";

const SITE_URL = "https://skillanic.com";

const DEFAULT_IMAGE =
  "https://res.cloudinary.com/dd3qjg9qb/image/upload/q_auto:best,f_auto/v1786481384/ak_yiq5wg.png";

const SEO = ({
  title = "Skillanic | IT Training Institute in Bangalore",

  description =
    "Skillanic Technologies offers industry-focused IT training in Bangalore with real-time projects, internships and placement assistance.",

  canonical = "/",

  image = DEFAULT_IMAGE,

  noindex = false,

  type = "website",

  structuredData = null,
}) => {
  const canonicalUrl = canonical.startsWith("http")
    ? canonical
    : `${SITE_URL}${canonical}`;

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      <meta
        name="robots"
        content={
          noindex
            ? "noindex, nofollow"
            : "index, follow"
        }
      />

      {/* Canonical */}
      <link
        rel="canonical"
        href={canonicalUrl}
      />

      {/* Open Graph */}
      <meta
        property="og:title"
        content={title}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:type"
        content={type}
      />

      <meta
        property="og:url"
        content={canonicalUrl}
      />

      <meta
        property="og:image"
        content={image}
      />

      <meta
        property="og:site_name"
        content="Skillanic Technologies"
      />

      <meta
        property="og:locale"
        content="en_IN"
      />

      {/* Twitter / X */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={title}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      <meta
        name="twitter:image"
        content={image}
      />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;