"use client"

import { useCallback, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface BoneButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

interface Paw {
  id: number
  x: number
  drift: number
  rotate: number
  scale: number
  delay: number
}

export function BoneButton({ children, className, onClick, ...props }: BoneButtonProps) {
  const [paws, setPaws] = useState<Paw[]>([])
  const idRef = useRef(0)

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const burst: Paw[] = Array.from({ length: 5 }).map((_, i) => {
        idRef.current += 1
        return {
          id: idRef.current,
          x: -30 + i * 15 + (Math.random() * 10 - 5),
          drift: Math.random() * 20 - 10,
          rotate: Math.random() * 40 - 20,
          scale: 0.55 + Math.random() * 0.35,
          delay: Math.random() * 120,
        }
      })
      setPaws((prev) => [...prev, ...burst])
      onClick?.(e)
    },
    [onClick]
  )

  const removePaw = (id: number) => {
    setPaws((prev) => prev.filter((p) => p.id !== id))
  }

  return (
    <button
      onClick={handleClick}
      className={cn(
        "group relative isolate inline-flex h-14 w-48 shrink-0 items-center justify-center transition-transform duration-200 ease-out hover:scale-105 active:scale-95",
        className
      )}
      {...props}
    >
      {/* Silueta del hueso — tu path original, solo color sólido en vez de gradiente */}
      <svg
        viewBox="0 0 160 56"
        className="absolute inset-0 h-full w-full drop-shadow-[0_6px_10px_rgba(254,128,0,0.35)] transition-all duration-200 ease-out group-hover:drop-shadow-[0_8px_14px_rgba(254,128,0,0.45)] group-hover:brightness-105"
        aria-hidden="true"
      >
        <path
          d="M28 8c-8 0-14 6-14 13 0 4 2 7 5 9-3 2-5 5-5 9 0 7 6 13 14 13 6 0 11-3 13-8h58c2 5 7 8 13 8 8 0 14-6 14-13 0-4-2-7-5-9 3-2 5-5 5-9 0-7-6-13-14-13-6 0-11 3-13 8H41c-2-5-7-8-13-8z"
          className="fill-bone"
        />
      </svg>

      {/* Texto centrado sobre el hueso (el path del SVG no está centrado en su viewBox) */}
      <span className="absolute left-[46%] top-[53.6%] z-10 -translate-x-1/2 -translate-y-1/2 text-base font-bold tracking-wide text-bone-foreground [text-shadow:0_2px_0_rgba(0,0,0,0.15)]">
        {children}
      </span>

      {/* Partículas de patitas */}
      {paws.map((paw) => (
        <span
          key={paw.id}
          onAnimationEnd={() => removePaw(paw.id)}
          className="pointer-events-none absolute left-1/2 top-1/2 z-20 -translate-y-3 text-primary"
          style={
            {
              "--paw-x": `${paw.x}px`,
              "--paw-drift": `${paw.drift}px`,
              "--paw-rotate": `${paw.rotate}deg`,
              "--paw-scale": paw.scale,
              animation: `paw-rise 750ms ease-out ${paw.delay}ms forwards`,
            } as React.CSSProperties
          }
        >
          🐾
        </span>
      ))}
    </button>
  )
}