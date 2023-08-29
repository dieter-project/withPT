/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  env: {
    GOOGLE_ID:
      "27176373772-n76f9p4147ibmkrat9e0vj7etev1m1mg.apps.googleusercontent.com",
    GOOGLE_SECRET: "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",
  },
};

module.exports = nextConfig;
