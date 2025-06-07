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
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            icon: true,
          },
        },
      ],
    });
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "withpt-s3.s3.ap-northeast-2.amazonaws.com",
        pathname: "/**", 
      },
    ],
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
