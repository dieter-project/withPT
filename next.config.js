/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  experimental: {
    appDir: true,
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  images: {
    domains: ["withpt-s3.s3.ap-northeast-2.amazonaws.com"],
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/:path*',
  //       destination: `43.200.45.234/:path*`,
  //       permanent: true,
  //     },
  //   ]
  // },
};

module.exports = nextConfig;
