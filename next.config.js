/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'build',
  images: {
    domains: ["upload.wikimedia.org", "i.scdn.co"]
  }
}

module.exports = nextConfig
