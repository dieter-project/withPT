/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  experimental: {
    appDir: true,
  },
<<<<<<< HEAD
=======
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
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
>>>>>>> 37000fc03dcdd13e9b232aee594ca46978b7e8e9
  env: {
    GOOGLE_ID:
      "27176373772-n76f9p4147ibmkrat9e0vj7etev1m1mg.apps.googleusercontent.com",
    GOOGLE_SECRET: "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",
  },
};

module.exports = nextConfig;
