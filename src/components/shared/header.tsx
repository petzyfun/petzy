"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ShoppingCart, User, Languages, Menu, X } from "lucide-react"
import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { BoneButton } from "./bone-button" // ajusta el path si difiere

const NAV_ITEMS = [
  { label: "Inicio", href: "/" },
  { label: "Veterinarias", href: "/veterinarias" },
  { label: "Adopciones", href: "/adopciones" },
  { label: "Asociaciones", href: "/asociaciones" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/contacto" },
]

const LANGUAGES = [
  { code: "ES", label: "Español" },
  { code: "EN", label: "English" },
]

// Quita el prefijo de locale (/es, /en) para comparar rutas correctamente
function normalizePathname(pathname: string) {
  const stripped = pathname.replace(/^\/(es|en)(?=\/|$)/, "")
  return stripped === "" ? "/" : stripped
}

export function Header() {
  const rawPathname = usePathname()
  const pathname = normalizePathname(rawPathname)
  const [activeLang, setActiveLang] = useState("ES")
  const [mobileOpen, setMobileOpen] = useState(false)

  const LanguageSwitcher = ({ className = "" }: { className?: string }) => (
    <Menubar className={`h-auto border-none bg-transparent p-0 shadow-none ${className}`}>
      <MenubarMenu>
        <MenubarTrigger
          className="flex items-center gap-1.5 rounded-l-2xl bg-nav-language px-3 py-2 text-sm font-medium text-primary
            focus:bg-nav-language!
            focus-visible:bg-nav-language!
            data-[state=open]:bg-nav-language!
            data-highlighted:bg-nav-language!"
        >
          <Languages className="h-4 w-4" strokeWidth={2} />
          <span>{activeLang}</span>
        </MenubarTrigger>
        <MenubarContent align="end" className="bg-white border shadow-md">
          <MenubarRadioGroup value={activeLang} onValueChange={setActiveLang}>
            {LANGUAGES.map((lang) => (
              <MenubarRadioItem key={lang.code} value={lang.code}>
                {lang.label}
              </MenubarRadioItem>
            ))}
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )

  return (
    <header className="relative mx-auto w-full max-w-7xl animate-nav-in px-4 pt-4">
      <div className="rounded-2xl bg-navbar shadow-sm">
        {/* Fila principal */}
        <div className="flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-3xl font-extrabold text-primary">P</span>
            <span className="text-3xl font-extrabold text-foreground">etzy</span>
          </Link>

          {/* Nav links — solo desktop */}
          <nav className="hidden items-center gap-8 md:flex">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative inline-block w-fit pb-1 text-sm transition-colors duration-300 ${
                    isActive
                      ? "font-extrabold text-primary"
                      : "font-medium text-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-0.5 w-full origin-left rounded-full bg-primary transition-transform duration-300 ease-out ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </Link>
              )
            })}
          </nav>

          {/* Actions — solo desktop */}
          <div className="hidden items-center gap-6 md:flex">
            <LanguageSwitcher />
            <BoneButton>¡Comprar!</BoneButton>
            <Link
              href="/carrito"
              aria-label="Carrito"
              className="text-primary transition-transform hover:scale-110 hover:opacity-80"
            >
              <ShoppingCart className="h-6 w-6" strokeWidth={2} />
            </Link>
            <Link
              href="/cuenta"
              aria-label="Cuenta"
              className="text-primary transition-transform hover:scale-110 hover:opacity-80"
            >
              <User className="h-6 w-6" strokeWidth={2} />
            </Link>
          </div>

          {/* Hamburguesa — solo mobile */}
          <button
            type="button"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="text-primary md:hidden"
          >
            {mobileOpen ? <X className="h-7 w-7" strokeWidth={2} /> : <Menu className="h-7 w-7" strokeWidth={2} />}
          </button>
        </div>

        {/* Panel mobile */}
        {mobileOpen && (
          <div className="absolute left-0 right-0 top-full z-30 mx-4 mt-2 flex flex-col gap-4 rounded-2xl border border-border bg-navbar px-6 pb-6 pt-4 shadow-md md:hidden">
            <nav className="flex flex-col gap-4">
              {NAV_ITEMS.filter((item) => item.href !== "/").map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`text-base ${
                      isActive ? "font-extrabold text-primary" : "font-medium text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </nav>

            <div className="flex items-center justify-between border-t border-border pt-4">
              <LanguageSwitcher />
              <div className="flex items-center gap-4">
                <button
                  aria-label="Cuenta"
                  className="text-primary transition-transform hover:scale-110 hover:opacity-80"
                >
                  <User className="h-6 w-6" strokeWidth={2} />
                </button>
                <button className="rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground">
                  Regístrate
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}