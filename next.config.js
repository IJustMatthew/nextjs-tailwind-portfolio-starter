const { withContentlayer } = require("next-contentlayer")
const { i18n } = require("./next-i18next.config.js")

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: false,
    styledComponents: true
  },
  images: {
    domains: [
      "localhost"
      // Your domains come here
    ]
  },
  i18n,
  experimental: {
    scrollRestoration: true
  }
}

module.exports = withContentlayer(nextConfig)
