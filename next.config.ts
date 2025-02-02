import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.microcms-assets.io"], // ここに追加
  },
};

export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     domains: ["images.microcms-assets.io"], // ここに追加
//   },
// };

// module.exports = nextConfig;