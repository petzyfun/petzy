"use client"

import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"

export type PetSpecies = "Perro" | "Gato"

export interface PetCardProps {
  name: string
  species: PetSpecies
  age: string
  sex: "Macho" | "Hembra"
  imageUrl: string
  href?: string
  className?: string
}

const SPECIES_BADGE: Record<PetSpecies, string> = {
  Perro: "bg-primary/70 text-white border border-white/30 backdrop-blur-md",
  Gato: "bg-pink-500/70 text-white border border-white/30 backdrop-blur-md",
}

export function PetCard({
  name,
  species,
  age,
  sex,
  imageUrl,
  href = "#",
  className,
}: PetCardProps) {
  return (
    <Card className={cn("h-full rounded-2xl p-0! ring-0 shadow-sm", className)}>
      <Link href={href} className="group relative block h-full w-full">
        <Image
          src={imageUrl}
          alt={name}
          fill
          sizes="(max-width: 640px) 45vw, 260px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
        />

        {/* Degradado base para contraste */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent transition-opacity duration-300 ease-out group-hover:from-black/90" />

        {/* Badge de especie */}
        <span
          className={cn(
            "absolute left-2.5 top-2.5 rounded-full px-2.5 py-1 text-xs font-semibold shadow-sm transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-105",
            SPECIES_BADGE[species]
          )}
        >
          {species}
        </span>

        {/* Texto sobre la imagen */}
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3 transition-transform duration-300 ease-out group-hover:-translate-y-1">
          <div className="min-w-0">
            <p className="truncate text-base font-extrabold text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.5)]">
              {name}
            </p>
            <p className="text-xs text-white/85">
              {age} · {sex}
            </p>
          </div>

          <span className="shrink-0 translate-x-1 text-xs font-semibold text-white opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100">
            Adoptar →
          </span>
        </div>
      </Link>
    </Card>
  )
}