import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tranquil Labs — AI Product Development & Software Consultancy",
    short_name: "Tranquil Labs",
    description:
      "Full-stack AI product studio. We design, build, and ship production-ready software — from MVPs to enterprise platforms.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A0A0B",
    theme_color: "#2dd4bf",
    orientation: "portrait",
    scope: "/",
    categories: ["technology", "business", "productivity"],
    lang: "en",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
        purpose: "any",
      },
      {
        src: "/logo.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
    screenshots: [
      {
        src: "/opengraph-image",
        sizes: "1200x630",
        type: "image/png",
        // @ts-expect-error — form_factor is a valid manifest field not yet in TS types
        form_factor: "wide",
        label: "Tranquil Labs homepage",
      },
    ],
  };
}
