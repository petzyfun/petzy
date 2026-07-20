import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface Producto {
  id: string;
  nombre: string;
  precio: number;
  imagenUrl?: string;
}

export function FeaturedProducts({ productos }: { productos: Producto[] }) {
  return (
    <section id="productos" className="scroll-mt-24 px-4 py-4">
      <h2 className="mb-3 text-sm font-medium">Productos destacados</h2>
      <div className="flex gap-3 overflow-x-auto pb-1">
        {productos.map((producto) => (
          <Card key={producto.id} className="min-w-32 shrink-0">
            <CardContent className="p-2">
              <div className="mb-2 h-16 w-full overflow-hidden rounded-md bg-muted">
                {producto.imagenUrl && (
                  <Image
                    src={producto.imagenUrl}
                    alt={producto.nombre}
                    width={128}
                    height={64}
                    className="h-full w-full object-cover"
                  />
                )}
              </div>
              <p className="truncate text-xs">{producto.nombre}</p>
              <p className="text-sm font-medium">${producto.precio}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      {/* TODO: conectar a la tabla de productos filtrando por proveedor_id y destacado = true */}
    </section>
  );
}
