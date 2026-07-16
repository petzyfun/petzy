import Link from "next/link"
import { PawPrint } from "lucide-react"
import { PetCard, type PetCardProps } from "@/components/ui/pet-card"
import { SectionHeading } from "@/components/home/section-heading"

export interface PetsAdoptionGridProps {
  title?: string
  description?: string
  pets: (PetCardProps & { id: string })[]
  viewAllHref?: string
}

const WIDTH_CYCLE = ["w-48", "w-60", "w-52", "w-72", "w-48", "w-56"]
const SQUARE_HEIGHT = "h-52 sm:h-60"
const TALL_HEIGHT = "h-80 sm:h-96"
const MIN_COLUMNS = 10

export function PetsAdoptionGrid({
  title = "Mascotas en adopción",
  description = "Conoce sus historias y encuentra a tu nuevo mejor amigo.",
  pets,
  viewAllHref = "/adopciones",
}: PetsAdoptionGridProps) {
  if (pets.length === 0) return null

  const dogs = pets.filter((p) => p.species === "Perro")
  const cats = pets.filter((p) => p.species === "Gato")

  if (dogs.length === 0 || cats.length === 0) return null

  // Cuántas columnas necesitamos para llenar el mínimo, repitiendo cada lista si hace falta
  const columnCount = Math.max(MIN_COLUMNS, dogs.length, cats.length)

  const columns = Array.from({ length: columnCount }, (_, i) => ({
    dog: dogs[i % dogs.length],
    cat: cats[i % cats.length],
  }))

  // Duplicamos para el loop continuo del marquee
  const loopColumns = [...columns, ...columns]

  return (
    <section className="mx-auto w-full max-w-7xl py-6">
      <div className="px-4">
        <SectionHeading title={title} viewAllHref={viewAllHref} />
        <p className="-mt-2 mx-auto mb-6 max-w-xl text-center text-sm text-muted-foreground">{description}</p>
      </div>

      <div className="group/marquee relative overflow-hidden">
        <div className="flex w-max animate-pet-marquee gap-5 px-4 group-hover/marquee:paused">
          {loopColumns.map(({ dog, cat }, colIndex) => {
            const width = WIDTH_CYCLE[colIndex % WIDTH_CYCLE.length]
            // Alterna cuál va cuadrada y cuál alargada según la columna
            const topSquare = colIndex % 2 === 0
            const topHeight = topSquare ? SQUARE_HEIGHT : TALL_HEIGHT
            const bottomHeight = topSquare ? TALL_HEIGHT : SQUARE_HEIGHT
            // Alterna también qué especie va arriba para que no queden en filas separadas
            const dogOnTop = colIndex % 2 === 0
            const topPet = dogOnTop ? dog : cat
            const bottomPet = dogOnTop ? cat : dog

            return (
              <div key={colIndex} className={`flex shrink-0 flex-col gap-5 ${width}`}>
                <div className={topHeight}>
                  <PetCard {...topPet} />
                </div>
                <div className={bottomHeight}>
                  <PetCard {...bottomPet} />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="relative mt-8 flex justify-center px-4">
        <Link
          href={viewAllHref}
          className="flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary shadow-[0_4px_20px_-4px_var(--primary)] transition-colors hover:bg-primary/20"
        >
          <PawPrint className="h-4 w-4" strokeWidth={2} />
          Ver más mascotas en adopción
        </Link>
      </div>
    </section>
  )
}