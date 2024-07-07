/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["placeimg.com", "example.com","res.cloudinary.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placeimg.com",
      },
    ],
  },
};

export default nextConfig;
