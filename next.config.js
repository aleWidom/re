/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: false
  },
  eslint: {
    ignoreDuringBuilds: true,
}
};

module.exports = nextConfig;
