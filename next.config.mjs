const nextConfig = {
  devIndicators: false,
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        pathname: "/szrxap404/**",
      },
    ],
  },
};

export default nextConfig;