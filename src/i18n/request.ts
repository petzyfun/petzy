// src/i18n/request.ts
import { getRequestConfig } from 'next-intl/server';
import { routing, type Locale } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // Obtener el locale solicitado
  let locale = await requestLocale;
  
  // ✅ Type guard para verificar si es un Locale válido
  const isValidLocale = (value: unknown): value is Locale => {
    return typeof value === 'string' && routing.locales.includes(value as Locale);
  };

  // Si no es válido, usar el default
  if (!isValidLocale(locale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale: locale as Locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});