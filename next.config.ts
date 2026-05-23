/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true, // Keep this for performance!
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
