"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  Stethoscope,
  ShoppingBag,
  Heart,
  Home,
  Scissors,
  BedDouble,
  TreePine,
  type LucideIcon,
} from "lucide-react"

interface Category {
  label: string
  icon: LucideIcon
  href: string
  ring: string
  iconClass: string
}

const CATEGORIES: Category[] = [
  { label: "Veterinaria", icon: Stethoscope, href: "/veterinarias", ring: "from-primary/15 to-primary/5", iconClass: "text-primary" },
  { label: "Tienda", icon: ShoppingBag, href: "/tienda", ring: "from-amber-400/20 to-amber-400/5", iconClass: "text-amber-600" },
  { label: "Adopciones", icon: Heart, href: "/adopciones", ring: "from-rose-400/20 to-rose-400/5", iconClass: "text-rose-500" },
  { label: "Refugios", icon: Home, href: "/refugios", ring: "from-secondary/30 to-secondary/5", iconClass: "text-bone" },
  { label: "Estética", icon: Scissors, href: "/estetica", ring: "from-violet-400/20 to-violet-400/5", iconClass: "text-violet-600" },
  { label: "Pensiones", icon: BedDouble, href: "/pensiones", ring: "from-teal-400/20 to-teal-400/5", iconClass: "text-teal-600" },
  { label: "Santuarios", icon: TreePine, href: "/santuarios", ring: "from-emerald-400/20 to-emerald-400/5", iconClass: "text-emerald-600" },
]

export function CategoryRow() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="mx-auto mt-8 w-full max-w-7xl px-4">
      <div className="flex gap-5 overflow-x-auto py-2 sm:grid sm:grid-cols-4 sm:justify-items-center sm:gap-y-6 sm:overflow-visible lg:flex lg:items-start lg:justify-between lg:gap-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {CATEGORIES.map(({ label, icon: Icon, href, ring, iconClass }, i) => (
          <Link
            key={label}
            href={href}
            style={{
              transitionDelay: mounted ? `${i * 60}ms` : "0ms",
            }}
            className={`group flex shrink-0 flex-col items-center gap-2.5 text-center transition-all duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
          >
            <span
              className={`relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-b ${ring} transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-105 sm:h-20 sm:w-20 lg:h-24 lg:w-24`}
            >
              <Icon
                className={`h-7 w-7 ${iconClass} transition-transform duration-300 ease-out group-hover:-rotate-6 group-hover:scale-110 sm:h-9 sm:w-9 lg:h-10 lg:w-10`}
                strokeWidth={1.75}
              />
            </span>
            <span className="flex flex-col items-center gap-1">
              <span className="w-16 text-xs font-medium text-foreground transition-colors duration-200 group-hover:text-primary sm:w-20 sm:text-sm">
                {label}
              </span>
              <span className="h-0.5 w-0 rounded-full bg-primary transition-all duration-300 ease-out group-hover:w-6" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}