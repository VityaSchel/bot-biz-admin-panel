const million = require('million/compiler');
/* eslint-disable @typescript-eslint/no-var-requires */
const { i18n } = require('./next-i18next.config')

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  reactStrictMode: true,
  typescript: { ignoreBuildErrors: true }, eslint: { ignoreDuringBuilds: true }, // TODO: Ideas on how to put these into netlify envs?
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })

    return config
  },
  images: {
    // FOR MOCK DATA! TODO: Remove in production
    domains: ['is1-ssl.mzstatic.com', 'is2-ssl.mzstatic.com', 'avatars.mds.yandex.net']
  }
}

module.exports = million.next(
  nextConfig, { auto: true }
)