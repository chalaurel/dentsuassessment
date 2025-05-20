import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    additionalData: `$var: red;`,
  },
  images: {
    domains: ["api.react-finland.fi", "picsum.photos"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.react-finland.fi",
        pathname: "/media/**",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
};

export default nextConfig;
