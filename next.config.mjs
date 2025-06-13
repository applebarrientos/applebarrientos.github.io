/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/applebarrientos.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/applebarrientos.github.io/' : '',

};

export default nextConfig;
