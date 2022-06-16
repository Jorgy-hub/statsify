/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  future: { webpack5: false },
  distDir: 'build',
  images: {
    loader: 'akamai',
    path:'',
    domains: ['upload.wikimedia.org', 'i.scdn.co'],
  }
};

module.exports = nextConfig;
