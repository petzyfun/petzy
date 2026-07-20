import { Stethoscope, Syringe, Scissors, LifeBuoy, type LucideIcon } from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  consulta: Stethoscope,
  vacunacion: Syringe,
  estetica: Scissors,
  urgencias: LifeBuoy,
};

interface ServicioItem {
  key: string;
  label: string;
}

export function QuickServices({ servicios }: { servicios: ServicioItem[] }) {
  return (
    <section id="servicios" className="scroll-mt-24 px-4 py-4">
      <h2 className="mb-3 text-sm font-medium">Servicios</h2>
      <div className="flex gap-3 overflow-x-auto pb-1">
        {servicios.map(({ key, label }) => {
          const Icon = ICONS[key] ?? Stethoscope;
          return (
            <div key={key} className="flex min-w-16 flex-col items-center gap-1 text-center">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-muted">
                <Icon className="h-5 w-5 text-foreground" />
              </div>
              <span className="text-xs text-muted-foreground">{label}</span>
            </div>
          );
        })}
      </div>
      {/* TODO: mapear ICONS contra el catalogo real (config/categories.ts, ~70 servicios) */}
    </section>
  );
}
