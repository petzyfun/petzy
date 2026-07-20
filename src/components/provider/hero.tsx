import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  nombre: string;
  categoria: string;
  ciudad: string;
  telefono: string;
  direccion: string;
  logoUrl?: string;
  coverUrl?: string;
}

export function ProviderHero({
  nombre,
  categoria,
  ciudad,
  telefono,
  direccion,
  logoUrl,
  coverUrl,
}: HeroProps) {
  return (
    <section id="inicio" className="scroll-mt-24">
      <div className="relative h-48 w-full overflow-hidden rounded-2xl bg-muted">
        {coverUrl && (
          <Image
            src={coverUrl}
            alt={`Portada de ${nombre}`}
            fill
            className="object-cover"
            priority
          />
        )}
      </div>

      <div className="-mt-8 flex items-center gap-3 px-4">
        <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border-4 border-background bg-background">
          {/* TODO: reemplazar placeholder por logo real del proveedor */}
          {logoUrl ? (
            <Image src={logoUrl} alt={nombre} width={64} height={64} className="object-cover" />
          ) : (
            <span className="text-xl">🐾</span>
          )}
        </div>
        <div>
          <h1 className="text-lg font-medium">{nombre}</h1>
          <p className="text-sm text-muted-foreground">
            {categoria} · {ciudad}
          </p>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-2 px-4 text-sm text-muted-foreground">
        <span className="flex items-center gap-1 rounded-full border px-3 py-1">
          <Phone className="h-3.5 w-3.5" /> {telefono}
        </span>
        <span className="flex items-center gap-1 rounded-full border px-3 py-1">
          <MapPin className="h-3.5 w-3.5" /> {direccion}
        </span>
      </div>

      <div className="mt-4 flex gap-3 px-4">
        <Button asChild className="flex-1">
          <Link href="#contacto">Agendar cita</Link>
        </Button>
        <Button asChild variant="outline" className="flex-1">
          <Link href="#servicios">Ver servicios</Link>
        </Button>
      </div>
    </section>
  );
}
