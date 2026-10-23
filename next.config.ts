import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Configure the rendering features and CSS pipeline used by this app.
  experimental: { agentFeedback: true },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      '*.css': {
        loaders: ['@tailwindcss/turbopack'],
        as: '*.css',
      },
    },
  },
}

export default nextConfig
