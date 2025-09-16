/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { typedRoutes: true },
  async headers() {
    return [
      {
        source: "/cv/:path*",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, noarchive" }
        ]
      }
    ];
  }
};
export default nextConfig;
