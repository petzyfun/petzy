import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"
import { FacebookIcon, InstagramIcon, TwitterIcon } from "@/components/shared/social-icons"

const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Veterinarias", href: "/veterinarias" },
  { label: "Adopciones", href: "/adopciones" },
  { label: "Asociaciones", href: "/asociaciones" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/contacto" },
]

const SERVICE_LINKS = [
  { label: "Veterinaria", href: "/veterinarias" },
  { label: "Tienda", href: "/tienda" },
  { label: "Adopciones", href: "/adopciones" },
  { label: "Refugios", href: "/refugios" },
  { label: "Estética", href: "/estetica" },
  { label: "Pensiones", href: "/pensiones" },
]

const LEGAL_LINKS = [
  { label: "Términos y condiciones", href: "/legal/terminos" },
  { label: "Política de privacidad", href: "/legal/privacidad" },
  { label: "Cookies", href: "/legal/cookies" },
]

const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://facebook.com", icon: FacebookIcon },
  { label: "Instagram", href: "https://instagram.com", icon: InstagramIcon },
  { label: "Twitter", href: "https://twitter.com", icon: TwitterIcon },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-10 w-full bg-white sm:mt-16">
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:py-14">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          {/* Marca */}
          <div className="col-span-2 flex flex-col gap-4 sm:col-span-1">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-extrabold text-primary">P</span>
              <span className="text-2xl font-extrabold text-foreground">etzy</span>
            </Link>
            <p className="max-w-xs text-sm text-muted-foreground">
              Conectamos a tu mascota con veterinarias, refugios y servicios de confianza cerca de ti.
            </p>

            <div className="flex items-center gap-3 pt-1">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-primary transition-transform duration-200 ease-out hover:scale-110 hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navegación */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-bold text-foreground">Navegación</h3>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-bold text-foreground">Servicios</h3>
            <ul className="flex flex-col gap-2.5">
              {SERVICE_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-bold text-foreground">Contacto</h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2} />
                <span>Tuxtla Gutiérrez, Chiapas, México</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 shrink-0 text-primary" strokeWidth={2} />
                <a href="tel:+529611234567" className="transition-colors hover:text-primary">
                  +52 961 123 4567
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 shrink-0 text-primary" strokeWidth={2} />
                <a href="mailto:hola@petzy.com" className="transition-colors hover:text-primary">
                  hola@petzy.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-4 px-4 py-5 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-xs text-muted-foreground">
            © {year} Petzy. Todos los derechos reservados.
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:justify-end">
            {LEGAL_LINKS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-xs text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
