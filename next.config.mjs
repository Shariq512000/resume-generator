/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '',
  reactStrictMode: true,
  images: {
    remotePatterns: [new URL('https://dinocamp.io/assets/images/login-img.webp')],
  },
};

export default nextConfig;
