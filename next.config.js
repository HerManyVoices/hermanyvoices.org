/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'res.cloudinary.com'],
    formats: ['image/webp'],
    // path: `${basePath}/_next/image`,
  },
  presets: ['next/babel'],
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{loader: '@svgr/webpack', options: {icon: true}}],
    })
    return config
  }
}
