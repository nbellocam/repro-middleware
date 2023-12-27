/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    localeDetection: false,
    locales: ["en", "es", "default"],
    defaultLocale: "default",
  },
  compiler: {
    removeConsole: false,
  },
};

module.exports = nextConfig;
