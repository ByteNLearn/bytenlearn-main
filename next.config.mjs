/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
    // Serve images in modern formats for smaller file sizes
    formats: ['image/avif', 'image/webp'],
  },
  // Enable gzip/brotli compression
  compress: true,
  // Optimize production builds
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Experimental performance features
  experimental: {
    // Optimize package imports to reduce bundle size
    optimizePackageImports: ['framer-motion', '@react-three/fiber', '@react-three/drei', 'three'],
  },
};

export default nextConfig;
