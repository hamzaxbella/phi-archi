import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https" as const, // Explicitly asserting as "https"
        hostname: "cdn.sanity.io",
        port: "", // Empty string for no port
      },
    ],
  },
  experimental: {
    scrollRestoration: true,
  },
};

export default withNextIntl(nextConfig);
