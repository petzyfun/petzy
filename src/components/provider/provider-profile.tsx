import { FloatingNav } from "@/components/provider/floating-nav";
import { ProviderHero } from "@/components/provider/hero";
import { QuickServices } from "@/components/provider/quick-services";
import { FeaturedProducts } from "@/components/provider/featured-products";
import { SecondaryHighlightBanner } from "@/components/provider/secondary-highlight-banner";
import { AdBanner } from "@/components/provider/ad-banner";
import { AboutSection } from "@/components/provider/about-section";
import { Gallery } from "@/components/provider/gallery";
import { LocationMap } from "@/components/provider/location-map";
import { ProviderFooter } from "@/components/provider/provider-footer";

// TODO: reemplazar "any" por el tipo real generado en src/types/database.types.ts
interface ProviderProfileProps {
  proveedor: any;
}

export function ProviderProfile({ proveedor }: ProviderProfileProps) {
  return (
    <div className="relative mx-auto max-w-lg pb-8">
      <FloatingNav />

      <ProviderHero
        nombre={proveedor.nombre}
        categoria={proveedor.categoria}
        ciudad={proveedor.ciudad}
        telefono={proveedor.telefono}
        direccion={proveedor.direccion}
        logoUrl={proveedor.logo_url}
        coverUrl={proveedor.portada_url}
      />

      <QuickServices servicios={proveedor.servicios ?? []} />

      <FeaturedProducts productos={proveedor.productos_destacados ?? []} />

      <SecondaryHighlightBanner
        titulo="Mas que un negocio, somos el mejor aliado para tu mascota"
        items={proveedor.destacados_secundarios ?? []}
      />

      <AdBanner />

      <AboutSection descripcion={proveedor.descripcion ?? ""} />

      <Gallery imagenes={proveedor.galeria ?? []} />

      <LocationMap direccion={proveedor.direccion} lat={proveedor.lat} lng={proveedor.lng} />

      <ProviderFooter
        facebookUrl={proveedor.facebook_url}
        instagramUrl={proveedor.instagram_url}
        whatsappUrl={proveedor.whatsapp_url}
        tiktokUrl={proveedor.tiktok_url}
      />

      <section
        id="contacto"
        className="scroll-mt-24 px-4 py-4 text-center text-sm text-muted-foreground"
      >
        {/* TODO: formulario o botones de contacto (WhatsApp, telefono, redes) */}
        Contacto
      </section>
    </div>
  );
}
