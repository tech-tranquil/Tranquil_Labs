import { MetadataRoute } from "next";

const siteUrl = "https://tranquillabs.net";

// Static last-modified date — bump this manually when you make major content changes.
// Using a fixed date (instead of new Date()) gives Google a stable lastmod signal.
const LAST_MODIFIED = "2025-04-07";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
