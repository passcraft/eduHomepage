/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['basehub.earth'],
  },
}

module.exports = nextConfig;
