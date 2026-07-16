import Image from "next/image"
import Link from "next/link"

export interface AssociationCardProps {
  name: string
  tagline: string
  logoUrl: string
  backgroundUrl: string
  href?: string
}

export function AssociationCard({
  name,
  tagline,
  logoUrl,
  backgroundUrl,
  href = "#",
}: AssociationCardProps) {
  return (
    <Link
      href={href}
      className="group relative block h-56 w-full overflow-hidden rounded-2xl transition-transform duration-300 ease-out hover:-translate-y-1 sm:h-64"
    >
      <Image
        src={backgroundUrl}
        alt={name}
        fill
        sizes="(max-width: 768px) 50vw, 20vw"
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4 text-center">
        <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full ring-2 ring-white/80 sm:h-20 sm:w-20">
          <Image
            src={logoUrl}
            alt={`Logo de ${name}`}
            fill
            sizes="80px"
            className="object-cover"
          />
        </span>
        <div className="min-w-0">
          <h3 className="truncate text-sm font-extrabold leading-tight text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.4)]">
            {name}
          </h3>
          <p className="truncate text-xs text-white/85">{tagline}</p>
        </div>
      </div>
    </Link>
  )
}
