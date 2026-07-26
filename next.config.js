/** @type {import('next').NextConfig} */

// DEMO_EXPORT=1 produces a self-contained folder in out/ that runs from any
// static file server. Redirects and image optimisation need a server, so the
// export trades them for portability.
const isExport = process.env.DEMO_EXPORT === "1";

const remotePatterns = [
  { protocol: "https", hostname: "cdn.linkscape.app" },
  { protocol: "https", hostname: "avatars.githubusercontent.com" },
  { protocol: "https", hostname: "assets.hackclub.com" },
  { protocol: "https", hostname: "files.ohevan.com" },
  { protocol: "https", hostname: "assets.ohevan.com" },
];

// GitHub Pages serves a project site under /<repo>, so the export needs a
// base path. Leave BASE_PATH unset to export for a domain root.
const basePath = process.env.BASE_PATH ?? "";

const nextConfig = isExport
  ? {
      reactStrictMode: true,
      output: "export",
      trailingSlash: true,
      basePath,
      env: { NEXT_PUBLIC_BASE_PATH: basePath },
      images: { remotePatterns, unoptimized: true },
    }
  : {
      reactStrictMode: true,
      images: { remotePatterns },
      async redirects() {
        return [
          // /projects and /legal predate the Work hub and the Governance
          // section. Both were linked externally, so they redirect.
          { source: "/projects", destination: "/work", permanent: true },
          { source: "/legal", destination: "/governance", permanent: true },
        ];
      },
    };

module.exports = nextConfig;
