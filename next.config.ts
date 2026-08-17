import type { NextConfig } from "next";

const defaultR2PublicUrl = "https://pub-b6d77d3bc0a843b0ae7d1e61de9c768b.r2.dev";
const r2PublicUrl = new URL(
  process.env.R2_PUBLIC_BASE_URL || defaultR2PublicUrl,
);
const r2RemotePattern = {
  protocol: r2PublicUrl.protocol === "http:" ? "http" : "https",
  hostname: r2PublicUrl.hostname,
  pathname: "/**",
} as const;

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "48mb",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      r2RemotePattern,
    ],
  },
};

export default nextConfig;
