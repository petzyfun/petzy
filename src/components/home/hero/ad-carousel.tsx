"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { adSlides } from "./ad-slides"

const AUTOPLAY_INTERVAL_MS = 6000

export function AdCarousel() {
  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const slideCount = adSlides.length

  const goTo = useCallback(
    (i: number) => setIndex(((i % slideCount) + slideCount) % slideCount),
    [slideCount]
  )
  const goNext = useCallback(() => goTo(index + 1), [goTo, index])
  const goPrev = useCallback(() => goTo(index - 1), [goTo, index])

  useEffect(() => {
    if (isPaused || slideCount <= 1) return
    const id = setInterval(goNext, AUTOPLAY_INTERVAL_MS)
    return () => clearInterval(id)
  }, [goNext, isPaused, slideCount])

  if (slideCount === 0) return null

  return (
    <section
      className="relative mx-auto mt-6 w-full max-w-7xl px-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl sm:aspect-8/3">
        <div
          className="flex h-full w-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {adSlides.map((slide, i) => {
            const image = (
              <Image
                src={slide.imageUrl}
                alt={slide.alt}
                fill
                sizes="100vw"
                className="object-cover"
                priority={i === 0}
              />
            )
            return (
              <div key={slide.id} className="relative h-full w-full shrink-0">
                {slide.href ? (
                  <Link href={slide.href} className="relative block h-full w-full">
                    {image}
                  </Link>
                ) : (
                  image
                )}
              </div>
            )
          })}
        </div>
      </div>

      {slideCount > 1 && (
        <>
          <button
            type="button"
            aria-label="Anterior"
            onClick={goPrev}
            className="absolute left-6 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/80 p-2 text-foreground shadow-sm transition-opacity hover:opacity-80"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Siguiente"
            onClick={goNext}
            className="absolute right-6 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/80 p-2 text-foreground shadow-sm transition-opacity hover:opacity-80"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-2">
            {adSlides.map((slide, i) => (
              <button
                key={slide.id}
                type="button"
                aria-label={`Ir a la diapositiva ${i + 1}`}
                onClick={() => goTo(i)}
                className={cn(
                  "h-2 rounded-full transition-all",
                  i === index ? "w-6 bg-primary" : "w-2 bg-primary/30"
                )}
              />
            ))}
          </div>
        </>
      )}
    </section>
  )
}
