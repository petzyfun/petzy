import type { ReactNode } from "react"

export function SectionFrame({
  children,
  className = "",
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`relative mx-auto w-full max-w-7xl px-4 ${className}`}>
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-accent/50 via-white to-accent/30 p-6 ring-1 ring-primary/10 sm:p-10">
        {/* Halos decorativos */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-secondary/25 blur-3xl" />

        {children}
      </div>
    </div>
  )
}
