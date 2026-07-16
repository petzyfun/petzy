"use client"

import Image from "next/image"
import Link from "next/link"

export interface AdBannerProps {
  imageUrl: string
  alt: string
  href?: string
  /** Prioriza la carga si el banner está visible desde el inicio (above the fold) */
  priority?: boolean
  className?: string
}

export function AdBanner({
  imageUrl,
  alt,
  href,
  priority = false,
  className = "",
}: AdBannerProps) {
  const content = (
    <div className="relative aspect-4/1 w-full overflow-hidden rounded-2xl">
      <Image
        src={imageUrl}
        alt={alt}
        fill
        sizes="100vw"
        priority={priority}
        className="object-cover"
      />
    </div>
  )

  return (
    <section className={`mx-auto mt-10 hidden w-full max-w-7xl px-4 sm:block ${className}`}>
      {href ? (
        <Link
          href={href}
          className="block transition-transform duration-300 ease-out hover:scale-[1.01]"
        >
          {content}
        </Link>
      ) : (
        content
      )}
    </section>
  )
}