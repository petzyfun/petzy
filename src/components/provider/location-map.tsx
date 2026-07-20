import { MapEmbed } from "@/components/shared/map-embed";

interface LocationMapProps {
  direccion: string;
  lat?: number;
  lng?: number;
}

export function LocationMap({ direccion, lat, lng }: LocationMapProps) {
  return (
    <section id="ubicacion" className="scroll-mt-24 px-4 py-4">
      <h2 className="mb-3 text-sm font-medium">Ubicacion</h2>
      <p className="mb-2 text-sm text-muted-foreground">{direccion}</p>
      {/* Reutiliza el componente ya existente en src/components/shared/map-embed.tsx */}
      <MapEmbed lat={lat} lng={lng} address={direccion} />
    </section>
  );
}
