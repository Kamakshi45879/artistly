/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['placehold.co'], // ✅ This allows loading external images from placehold.co
  },
};

module.exports = nextConfig;