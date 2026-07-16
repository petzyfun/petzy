"use client"

import { useState } from "react"
import { ChevronDown, PawPrint } from "lucide-react"
import { cn } from "@/lib/utils"

export interface FaqItem {
  question: string
  answer: string
}

export interface FaqSectionProps {
  title?: string
  description?: string
  items: FaqItem[]
}

function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div
            key={i}
            className={cn(
              "overflow-hidden rounded-2xl border-l-4 bg-white shadow-sm ring-1 ring-foreground/5 transition-all duration-300",
              isOpen
                ? "border-l-primary shadow-[0_4px_24px_-4px_var(--primary)] ring-primary/20"
                : "border-l-transparent"
            )}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-accent/40 sm:px-6"
            >
              <span
                className={cn(
                  "text-sm font-semibold sm:text-base",
                  isOpen ? "text-primary" : "text-foreground"
                )}
              >
                {item.question}
              </span>
              <span
                className={cn(
                  "flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300",
                  isOpen
                    ? "bg-primary text-primary-foreground shadow-[0_0_0_4px_var(--accent)]"
                    : "bg-primary/10 text-primary"
                )}
              >
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform duration-300 ease-out",
                    isOpen && "rotate-180"
                  )}
                  strokeWidth={2.5}
                />
              </span>
            </button>

            <div
              className={cn(
                "grid transition-all duration-300 ease-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground sm:px-6">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export function FaqSection({
  title = "¿Tienes dudas?",
  description = "Aquí respondemos las preguntas más frecuentes para ayudarte a usar Petzy sin complicaciones.",
  items,
}: FaqSectionProps) {
  if (items.length === 0) return null

  return (
    <>
      {/* Vista desktop — título fijo a la izquierda + preguntas a la derecha */}
      <div className="hidden gap-10 lg:grid lg:grid-cols-[280px_1fr]">
        <div className="text-center lg:sticky lg:top-24 lg:self-start lg:text-left">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary lg:mx-0">
            <PawPrint className="h-6 w-6" strokeWidth={2} />
          </span>
          <h2 className="mt-4 text-2xl font-extrabold text-foreground">
            {title.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="bg-linear-to-r from-primary to-bone bg-clip-text text-transparent">
              {title.split(" ").slice(-1)}
            </span>
          </h2>
          <span className="mx-auto mt-2 block h-1 w-10 rounded-full bg-primary lg:mx-0" />
          <p className="mt-3 text-sm text-muted-foreground">{description}</p>
        </div>
        <FaqAccordion items={items} />
      </div>

      {/* Vista mobile/tablet — todo apilado */}
      <div className="flex flex-col gap-6 lg:hidden">
        <div className="text-center">
          <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <PawPrint className="h-6 w-6" strokeWidth={2} />
          </span>
          <h2 className="mt-3 text-xl font-extrabold text-foreground sm:text-2xl">
            {title.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="bg-linear-to-r from-primary to-bone bg-clip-text text-transparent">
              {title.split(" ").slice(-1)}
            </span>
          </h2>
          <span className="mx-auto mt-2 block h-1 w-10 rounded-full bg-primary" />
          <p className="mt-3 text-sm text-muted-foreground">{description}</p>
        </div>
        <FaqAccordion items={items} />
      </div>
    </>
  )
}