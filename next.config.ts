import type { NextConfig } from "next";

const r2PublicUrl = process.env.R2_PUBLIC_BASE_URL
  ? new URL(process.env.R2_PUBLIC_BASE_URL)
  : undefined;
const r2RemotePattern = r2PublicUrl
  ? ({
      protocol: r2PublicUrl.protocol === "http:" ? "http" : "https",
      hostname: r2PublicUrl.hostname,
      pathname: "/**",
    } as const)
  : undefined;

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
      ...(r2RemotePattern ? [r2RemotePattern] : []),
    ],
  },
};

export default nextConfig;
