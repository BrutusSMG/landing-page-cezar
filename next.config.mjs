/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.wixstatic.com', // Autorizando o domínio do logo
        port: '',
        pathname: '/media/**',
      },
    ],
  },
};

export default nextConfig;
