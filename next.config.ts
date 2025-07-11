import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const nextConfig: NextConfig = {
  // reactStrictMode: true,
  basePath: isProd ? "/applebarrientos.github.io" : "",
  output: 'export',
  distDir: 'dist',
};

export default nextConfig;