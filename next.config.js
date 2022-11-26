/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}



module.exports = {
  images: {
    loader: 'cloudinary',
    path: '/',
    domains: ['media.graphassets.com'],
  },
}