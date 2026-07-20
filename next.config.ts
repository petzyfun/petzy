// next.config.ts
import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  // Required for Prisma Compute
  output: "standalone",
  
  // Configuración de imágenes
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
      // Agrega más dominios si necesitas
      {
        protocol: 'https',
        hostname: '**.vercel.app',
      },
    ],
  },
  
  // ✅ Configuración de TypeScript (válida en Next.js 16+)
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // ⚠️ ESLint ya no va aquí, usa variables de entorno o comandos
  
  // Si usas cacheComponents (opcional)
  // cacheComponents: true,
  
  // Configuración de compilación
  compiler: {
    // Elimina console.log en producción (opcional)
    // removeConsole: process.env.NODE_ENV === 'production',
  },
};

export default withNextIntl(nextConfig);