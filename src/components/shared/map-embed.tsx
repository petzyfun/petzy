interface MapEmbedProps {
  lat?: number;
  lng?: number;
  address?: string;
  zoom?: number;
}

export function MapEmbed({ lat, lng, address, zoom = 15 }: MapEmbedProps) {
  const query = lat != null && lng != null ? lat + "," + lng : address;

  if (!query) {
    return (
      <div className="flex h-40 items-center justify-center rounded-xl bg-muted text-xs text-muted-foreground">
        Ubicacion no disponible
      </div>
    );
  }

  const src = "https://www.google.com/maps?q=" + encodeURIComponent(query) + "&z=" + zoom + "&output=embed";

  return (
    <div className="h-40 w-full overflow-hidden rounded-xl">
      <iframe
        src={src}
        title="Mapa de ubicacion"
        className="h-full w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
