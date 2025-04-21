/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  experimental: {
    serverActions: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Enable static exports
  output: 'export',
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
}

export default nextConfig 