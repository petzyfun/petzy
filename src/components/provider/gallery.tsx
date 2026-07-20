import Image from "next/image";

export function Gallery({ imagenes }: { imagenes: string[] }) {
  return (
    <section id="galeria" className="scroll-mt-24 px-4 py-4">
      <h2 className="mb-3 text-sm font-medium">Galeria</h2>
      <div className="grid grid-cols-3 gap-2">
        {imagenes.map((url, i) => (
          <div key={url + i} className="aspect-square overflow-hidden rounded-lg bg-muted">
            <Image
              src={url}
              alt={"Foto " + (i + 1)}
              width={150}
              height={150}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
