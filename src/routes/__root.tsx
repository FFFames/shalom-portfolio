import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

const SITE_TITLE = "Shalom Inchoi – AI & Full-Stack Developer";
const SITE_DESCRIPTION =
  "Portfolio of Shalom Inchoi - crafting intelligent solutions with OCR, machine learning, and full-stack development.";

// Vercel exposes VERCEL_PROJECT_PRODUCTION_URL at runtime (e.g. "miles.poke.site").
// Twitter's crawler requires absolute URLs for og:image / twitter:image — relative
// paths like "/api/og" are silently ignored, breaking link-preview cards on tweets.
const BASE_URL = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, viewport-fit=cover",
      },
      { name: "robots", content: "noindex, nofollow" },
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESCRIPTION },
      { name: "theme-color", content: "#FFFDFA" },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: SITE_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:image", content: `${BASE_URL}/api/og` },
      { property: "og:url", content: BASE_URL || "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE_TITLE },
      { name: "twitter:description", content: SITE_DESCRIPTION },
      { name: "twitter:image", content: `${BASE_URL}/api/og` },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.svg?v=11", type: "image/svg+xml" },
      { rel: "icon", href: "/favicon.png?v=11", type: "image/png", sizes: "512x512" },
      { rel: "icon", href: "/favicon.ico?v=11", sizes: "any" },
      { rel: "apple-touch-icon", href: "/favicon.png?v=11" },
      { rel: "manifest", href: "/manifest.json?v=11" },
    ],
  }),
  shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
