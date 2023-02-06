/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts: false,
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: false,
})
module.exports = withBundleAnalyzer({})

module.exports = (_, nextConfig) => {
  return withBundleAnalyzer({
    reactStrictMode: true,
    swcMinify: true,
    optimizeFonts: false,
  });
}
