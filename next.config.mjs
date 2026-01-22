/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // enable static export
  images: {
    unoptimized: true, // disable Next.js image optimization
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
