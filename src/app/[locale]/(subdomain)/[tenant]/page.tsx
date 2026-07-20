import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { ProviderProfile } from "@/components/provider/provider-profile";

interface TenantPageProps {
  params: Promise<{ locale: string; tenant: string }>;
}

async function getProviderByTenant(tenant: string) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("proveedores")
    .select("*")
    .eq("subdominio", tenant)
    .maybeSingle();

  // TODO: confirmar el nombre real de la columna que guarda el subdominio (ej. "subdominio" o "tenant_slug")
  if (error || !data) return null;
  return data;
}

export default async function TenantPage({ params }: TenantPageProps) {
  const { tenant } = await params;
  const proveedor = await getProviderByTenant(tenant);

  if (!proveedor) notFound();

  return <ProviderProfile proveedor={proveedor} />;
}
