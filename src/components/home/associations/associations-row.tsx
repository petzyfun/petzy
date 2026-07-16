"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ChevronRight, ChevronLeft } from "lucide-react"
import { AssociationCard, type AssociationCardProps } from "@/components/ui/association-card"
import { SectionHeading } from "@/components/home/section-heading"

export interface AssociationsRowProps {
  title?: string
  associations: (AssociationCardProps & { id: string })[]
  viewAllHref?: string
}

const MAX_VISIBLE = 6

function chunk<T>(arr: T[], size: number): T[][] {
  const result: T[][] = []
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size))
  }
  return result
}

function useItemsPerPage() {
  const [itemsPerPage, setItemsPerPage] = useState(5)

  useEffect(() => {
    const mqlMobile = window.matchMedia("(max-width: 639px)")
    const mqlTablet = window.matchMedia("(min-width: 640px) and (max-width: 1023px)")

    const update = () => {
      if (mqlMobile.matches) setItemsPerPage(2)
      else if (mqlTablet.matches) setItemsPerPage(3)
      else setItemsPerPage(5)
    }

    update()
    mqlMobile.addEventListener("change", update)
    mqlTablet.addEventListener("change", update)
    return () => {
      mqlMobile.removeEventListener("change", update)
      mqlTablet.removeEventListener("change", update)
    }
  }, [])

  return itemsPerPage
}

export function AssociationsRow({
  title = "Asociaciones disponibles",
  associations,
  viewAllHref = "/asociaciones",
}: AssociationsRowProps) {
  const itemsPerPage = useItemsPerPage()
  const [page, setPage] = useState(0)

  if (associations.length === 0) return null

  const visible = associations.slice(0, MAX_VISIBLE)
  const hasMore = associations.length > MAX_VISIBLE
  const pages = chunk(visible, itemsPerPage)
  const totalPages = pages.length

  const safePage = Math.min(page, totalPages - 1)
  const canGoLeft = safePage > 0
  const canGoRight = safePage < totalPages - 1

  return (
    <section className="relative mx-auto mt-10 w-full max-w-7xl px-4">
      <SectionHeading title={title} viewAllHref={viewAllHref} />

      <div className="relative">
        {canGoLeft && (
          <button
            type="button"
            aria-label="Ver anteriores"
            onClick={() => setPage((p) => p - 1)}
            className="absolute left-0 top-1/2 z-10 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white text-foreground shadow-md transition-transform hover:scale-105 sm:h-10 sm:w-10"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2.5} />
          </button>
        )}

        <button
          type="button"
          aria-label="Ver siguientes"
          onClick={() => canGoRight && setPage((p) => p + 1)}
          disabled={!canGoRight}
          className="absolute right-0 top-1/2 z-10 flex h-8 w-8 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white text-foreground shadow-md transition-transform hover:scale-105 disabled:cursor-default disabled:opacity-40 disabled:hover:scale-100 sm:h-10 sm:w-10"
        >
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2.5} />
        </button>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${safePage * 100}%)` }}
          >
            {pages.map((pageItems, i) => (
              <div key={i} className="flex w-full shrink-0 gap-3 sm:gap-4">
                {pageItems.map(({ id, ...association }) => (
                  <div key={id} className="min-w-0 flex-1">
                    <AssociationCard {...association} />
                  </div>
                ))}

                {i === totalPages - 1 && hasMore && (
                  <Link
                    href={viewAllHref}
                    className="flex h-56 flex-1 flex-col items-center justify-center gap-2 text-xs font-semibold text-primary transition-opacity hover:opacity-70 sm:h-64 sm:text-sm"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground sm:h-11 sm:w-11">
                      <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2.5} />
                    </span>
                    Ver más
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
