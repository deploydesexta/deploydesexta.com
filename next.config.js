
const nextConfig = {
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat'
      })
    }
    
    if (!isServer) {
      config.resolve.fallback.fs = false
    }

    return config
  },
  async rewrites() {
    return [
      { source: '/js/', destination: 'https://deploydesexta.com.br/' },
      { source: '/jekyll/', destination: 'https://deploydesexta.com.br/' },
      { source: '/svg/', destination: 'https://deploydesexta.com.br/' },
      { source: '/dev/', destination: 'https://deploydesexta.com.br/' },
      { source: '/tags/', destination: 'https://deploydesexta.com.br/' },
      { source: '/page/:slug*', destination: 'https://deploydesexta.com.br/' }
    ]
  },
  images: { domains: ['avatars.githubusercontent.com'] },
}

module.exports = nextConfig
