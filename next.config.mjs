H;
/** @type {import('next').NextConfig} */
// Removed basePath and assetPrefix logic as it's not needed for root deployment
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enable static export
  images: {
    unoptimized: true, // Disable Next.js image optimization for static export
  },
  // basePath: basePath, // Removed basePath
  // assetPrefix: assetPrefix, // Removed assetPrefix
};

export default nextConfig;
