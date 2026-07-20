"use client";

import { useState } from "react";
import { Home, ListChecks, ShoppingBag, Images, MapPin, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { id: "inicio", label: "Inicio", icon: Home },
  { id: "servicios", label: "Servicios", icon: ListChecks },
  { id: "productos", label: "Productos", icon: ShoppingBag },
  { id: "galeria", label: "Galeria", icon: Images },
  { id: "ubicacion", label: "Ubicacion", icon: MapPin },
  { id: "contacto", label: "Contacto", icon: Phone },
] as const;

export function FloatingNav() {
  const [active, setActive] = useState<string>("inicio");

  const handleClick = (id: string) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    // TODO: reemplazar por IntersectionObserver para marcar "active" segun el scroll real
  };

  return (
    <nav
      className="fixed left-3 top-1/2 z-40 flex -translate-y-1/2 flex-col gap-2 rounded-2xl border bg-background/95 p-2 backdrop-blur supports-[backdrop-filter]:bg-background/80"
      aria-label="Navegacion del perfil"
    >
      {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          type="button"
          aria-label={label}
          onClick={() => handleClick(id)}
          className={cn(
            "flex h-9 w-9 items-center justify-center rounded-xl transition-colors",
            active === id
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:bg-muted"
          )}
        >
          <Icon className="h-4 w-4" />
        </button>
      ))}
    </nav>
  );
}
