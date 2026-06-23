// src/proxy.ts
import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

export async function proxy(request: NextRequest) {
  // 1. Ejecutar middleware de internacionalización
  const response = intlMiddleware(request);
  
  // 2. Verificar que las variables de entorno existen
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  
  if (!supabaseUrl || !supabaseKey) {
    console.warn('⚠️ Supabase credentials not configured. Skipping auth middleware.');
    return response;
  }

  // 3. Configurar Supabase (solo si hay credenciales)
  try {
    const supabase = createServerClient(
      supabaseUrl,
      supabaseKey,
      {
        cookies: {
          getAll() {
            return request.cookies.getAll();
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value, options }) => {
              response.cookies.set(name, value, options);
            });
          },
        },
      }
    );

    // 4. Obtener usuario (refresca el token)
    await supabase.auth.getUser();
  } catch (error) {
    console.error('❌ Error in Supabase middleware:', error);
  }

  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|api|webhooks|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    '/',
    '/(es|en)/:path*',
  ],
};