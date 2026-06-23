// next.config.ts
import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  
  // ✅ Eliminar viewTransition y reactOwnerStack
  
  // ✅ Si necesitas cacheComponents, usarlo así:
  cacheComponents: true,
};

export default withNextIntl(nextConfig);