import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProduction ? "/gonnzax.github.io" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
