/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  future: { webpack5: true },
  distDir: 'build',
  images: {
    domains: ["upload.wikimedia.org", "i.scdn.co"]
  }
}

module.exports = nextConfig
