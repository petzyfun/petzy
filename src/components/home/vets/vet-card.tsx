"use client"

import Image from "next/image"
import Link from "next/link"
import { Star, MapPin } from "lucide-react"

export type VetStatus = "open" | "closed" | "opening_soon" | "closing_soon"

export interface VetCardProps {
  name: string
  rating: number
  reviewCount: number
  address: string
  imageUrl: string
  status: VetStatus
  /** Hora relevante según el estado: apertura si está cerrada, cierre si está abierta. Formato "HH:mm" */
  scheduleTime: string
  href?: string
}

const STATUS_CONFIG: Record<
  VetStatus,
  { label: string; dotClass: string; getSuffix: (time: string) => string }
> = {
  open: {
    label: "Abierto",
    dotClass: "bg-emerald-400",
    getSuffix: (time) => `· Cierra a las ${time}`,
  },
  closing_soon: {
    label: "Por cerrar",
    dotClass: "bg-amber-400",
    getSuffix: (time) => `· Cierra a las ${time}`,
  },
  opening_soon: {
    label: "Abrirá pronto",
    dotClass: "bg-amber-400",
    getSuffix: (time) => `· Abre a las ${time}`,
  },
  closed: {
    label: "Cerrado",
    dotClass: "bg-red-400",
    getSuffix: (time) => `· Abrirá hasta las ${time}`,
  },
}

function StarRating({ rating }: { rating: number }) {
  const rounded = Math.round(rating)
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${
            i < rounded ? "fill-primary text-primary" : "fill-white/30 text-white/30"
          }`}
          strokeWidth={1.5}
        />
      ))}
    </div>
  )
}

export function VetCard({
  name,
  rating,
  reviewCount,
  address,
  imageUrl,
  status,
  scheduleTime,
  href = "#",
}: VetCardProps) {
  const statusInfo = STATUS_CONFIG[status]

  return (
    <Link
      href={href}
      className="group relative block h-56 w-full overflow-hidden rounded-2xl transition-transform duration-300 ease-out hover:-translate-y-1 sm:h-72"
    >
      {/* Imagen de fondo — sin cambios */}
      <Image
        src={imageUrl}
        alt={name}
        fill
        sizes="(max-width: 768px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/0" />

      {/* Badge de estado */}
      <div className="absolute right-2 top-2 flex max-w-[85%] items-center gap-1 rounded-full border border-white/25 bg-white/15 px-2 py-1 backdrop-blur-md sm:right-3 sm:top-3 sm:gap-1.5 sm:px-3 sm:py-1.5">
        <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${statusInfo.dotClass}`} />
        <span className="truncate text-[10px] font-medium text-white sm:text-xs">
          {statusInfo.label}
          <span className="hidden font-normal text-white/80 sm:inline"> {statusInfo.getSuffix(scheduleTime)}</span>
        </span>
      </div>

      {/* Contenido — panel glass inferior */}
      <div className="absolute inset-x-0 bottom-0 space-y-1 bg-white/5 p-3 backdrop-blur-sm sm:space-y-1.5 sm:p-4">
        <h3 className="text-sm font-semibold leading-tight text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.4)] sm:text-lg">
          {name}
        </h3>

        <div className="flex items-center gap-1 sm:gap-1.5">
          <StarRating rating={rating} />
          <span className="text-[10px] text-white/85 sm:text-xs">({reviewCount})</span>
        </div>

        <div className="flex items-start gap-1 text-[10px] text-white/85 sm:gap-1.5 sm:text-xs">
          <MapPin className="mt-0.5 h-3 w-3 shrink-0 sm:h-3.5 sm:w-3.5" strokeWidth={2} />
          <span className="line-clamp-1">{address}</span>
        </div>
      </div>
    </Link>
  )
}
