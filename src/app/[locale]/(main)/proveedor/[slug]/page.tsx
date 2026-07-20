import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { ProviderProfile } from "@/components/provider/provider-profile";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

async function getProvider(slug: string) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("proveedores")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  // TODO: ajustar nombres de columnas al esquema real de la tabla "proveedores"
  if (error || !data) return null;
  return data;
}

export default async function ProviderPage({ params }: PageProps) {
  const { slug } = await params;
  const proveedor = await getProvider(slug);

  if (!proveedor) notFound();

  return <ProviderProfile proveedor={proveedor} />;
}
