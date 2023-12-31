/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ["src"],
  },
  reactStrictMode: true,
  images: {
    domains: ["imgd-ct.aeplcdn.com"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
