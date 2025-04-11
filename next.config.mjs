/** @type {import('next').NextConfig} */

// Configuration for static export to root directory (e.g., your-username.github.io)
const nextConfig = {
  output: "export", // Enable static export
  images: {
    unoptimized: true, // Disable Next.js image optimization for static export
  },
  // No basePath or assetPrefix needed for root deployment
  webpack: (config, { isServer }) => {
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      "./", // Add the project root directory
    ];
    return config;
    return config;
  },
  distDir: "out",
};

export default nextConfig;
