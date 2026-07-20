interface AboutSectionProps {
  descripcion: string;
  mision?: string;
  vision?: string;
  valores?: string;
}

export function AboutSection({ descripcion, mision, vision, valores }: AboutSectionProps) {
  return (
    <section id="sobre-nosotros" className="scroll-mt-24 px-4 py-4">
      <h2 className="mb-2 text-sm font-medium">¿Quienes somos?</h2>
      <p className="mb-3 text-sm text-muted-foreground">{descripcion}</p>
      <div className="grid grid-cols-3 gap-2">
        <div className="rounded-lg bg-muted p-2 text-center text-xs text-muted-foreground">Mision</div>
        <div className="rounded-lg bg-muted p-2 text-center text-xs text-muted-foreground">Vision</div>
        <div className="rounded-lg bg-muted p-2 text-center text-xs text-muted-foreground">Valores</div>
      </div>
      {/* TODO: mostrar mision/vision/valores reales cuando el proveedor los capture en su perfil */}
    </section>
  );
}
