const { webpack } = require('next/dist/compiled/webpack/webpack')
const path = require('path')
const { config } = require('process')
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media.dev.to',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media2.dev.to', // Add this to allow media2.dev.to
        pathname: '**',
      },
    ],
  },
  webpack: (config) => {
    config.resolve.alias['framer-motion'] = require.resolve('framer-motion');
    return config;
  },
}