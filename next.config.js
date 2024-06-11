/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {unoptimized: true},
  basePath: "",
  output: "export",
  reactStrictMode: true,
  // images: {
  //   loader: 'imgix',
  //   path: '',
  //   domains: ['images.microcms-assets.io'],
  // },
}

module.exports = nextConfig
