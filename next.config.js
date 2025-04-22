/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['netlify.app'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client', 'bcryptjs']
  },
  
  // Add assetPrefix for proper CSS loading on Netlify
  assetPrefix: process.env.NODE_ENV === 'production' ? '/' : '',
  
  // Ensure CSS modules are handled properly
  webpack: (config) => {
    // Add CSS handling
    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader', 'postcss-loader'],
    });
    
    return config;
  }
}

module.exports = nextConfig 