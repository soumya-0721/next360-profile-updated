import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* /technology was the working name of the capabilities page. */
  async redirects() {
    return [
      { source: "/technology", destination: "/capabilities", permanent: true },
      { source: "/services", destination: "/capabilities", permanent: true },
      { source: "/flagship", destination: "/organic", permanent: true },
    ];
  },
};

export default nextConfig;