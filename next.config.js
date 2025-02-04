/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: (config, options) => {
      config.module.rules.push( {
        type: 'javascript/auto',
        test: /\.mjs$/,
        use: []
      })
  
      return config
    },
  }
  
  module.exports = nextConfig