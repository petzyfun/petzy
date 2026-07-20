import type { ReactNode } from "react";

export default function TenantLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
  // TODO: aqui es un buen lugar para validar/leer el subdominio (via src/proxy.ts)
  // si varias paginas del tenant necesitan un dato compartido (ej. el proveedor ya resuelto)
}
