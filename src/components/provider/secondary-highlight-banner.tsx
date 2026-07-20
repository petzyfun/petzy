import Link from "next/link";
import { Dumbbell, Home, PawPrint, GraduationCap, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HighlightItem {
  key: string;
  label: string;
}

const ICONS: Record<string, LucideIcon> = {
  entrenamiento: Dumbbell,
  guarderia: Home,
  paseos: PawPrint,
  adiestramiento: GraduationCap,
};

interface SecondaryHighlightBannerProps {
  titulo: string;
  items: HighlightItem[];
  ctaHref?: string;
  ctaLabel?: string;
}

export function SecondaryHighlightBanner({
  titulo,
  items,
  ctaHref = "#servicios",
  ctaLabel = "Conocer mas",
}: SecondaryHighlightBannerProps) {
  return (
    <section className="px-4 py-4">
      <div className="rounded-2xl bg-primary/90 p-4 text-primary-foreground">
        <p className="mb-3 text-sm font-medium">{titulo}</p>
        <div className="mb-4 flex flex-wrap gap-4">
          {items.map(({ key, label }) => {
            const Icon = ICONS[key] ?? Dumbbell;
            return (
              <div key={key} className="flex flex-col items-center gap-1 text-center">
                <Icon className="h-5 w-5" />
                <span className="text-xs">{label}</span>
              </div>
            );
          })}
        </div>
        <Button asChild variant="secondary" size="sm">
          <Link href={ctaHref}>{ctaLabel}</Link>
        </Button>
      </div>
      {/* TODO: alimentar "items" desde el perfil del proveedor (servicios propios a resaltar, distinto del catalogo principal) */}
    </section>
  );
}
