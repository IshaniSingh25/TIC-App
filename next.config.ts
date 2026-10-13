import type { NextConfig } from "next";

/**
 * Built as a fully static export so it can be served from GitHub Pages (or any
 * static host). GitHub project sites live under `/<repo>/`, so the CI workflow
 * passes that prefix in via PAGES_BASE_PATH; locally it is empty.
 */
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  // Emit /story/index.html instead of /story.html — static hosts resolve
  // directory indexes without any rewrite rules.
  trailingSlash: true,
  basePath,
  images: {
    // The default optimizer needs a server. Unsplash's CDN resizes on its own,
    // so the loader just rewrites the width/height in the URL.
    loader: "custom",
    loaderFile: "./lib/image-loader.ts",
  },
};

export default nextConfig;
