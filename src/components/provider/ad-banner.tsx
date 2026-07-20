import { createClient } from "@/lib/supabase/server";
import { Megaphone } from "lucide-react";

interface Banner {
  id: string;
  titulo: string;
  descripcion_corta: string | null;
  imagen_url: string | null;
  link_destino: string | null;
}

async function getActiveBanner(): Promise<Banner | null> {
  const supabase = await createClient();
  const nowIso = new Date().toISOString();

  const { data, error } = await supabase
    .from("banners")
    .select("id, titulo, descripcion_corta, imagen_url, link_destino")
    .eq("activo", true)
    .eq("ubicacion_pagina", "proveedor_slug")
    .lte("fecha_inicio", nowIso)
    .gte("fecha_fin", nowIso)
    .order("prioridad", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error) {
    // TODO: enviar a logger; un banner caido nunca debe romper el perfil del proveedor
    return null;
  }
  return data;
}

export async function AdBanner() {
  const banner = await getActiveBanner();
  if (!banner) return null;

  return (
    <section className="px-4 py-4">
      <a
        href={banner.link_destino ?? "#"}
        className="flex items-center gap-3 rounded-xl border border-dashed p-3"
      >
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent">
          <Megaphone className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm font-medium">{banner.titulo}</p>
          {banner.descripcion_corta && (
            <p className="text-xs text-muted-foreground">{banner.descripcion_corta}</p>
          )}
        </div>
      </a>
    </section>
  );
}
