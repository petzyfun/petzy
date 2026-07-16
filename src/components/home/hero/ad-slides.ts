export interface AdSlide {
  id: string
  imageUrl: string
  alt: string
  href?: string
}

export const adSlides: AdSlide[] = [
  {
    id: "bienvenida",
    imageUrl: "/images/hero/bienvenida.png",
    alt: "Bienvenido a Petzy",
    href: "/veterinarias",
  },
  {
    id: "promo-veterinarias",
    imageUrl: "/images/hero/promo-veterinarias.png",
    alt: "Encuentra veterinarias cerca de ti",
    href: "/veterinarias",
  },
  {
    id: "adopciones",
    imageUrl: "/images/hero/slide_adopciones.png",
    alt: "Encuentra mascotas para adoptar",
    href: "/adopciones",
  },

]
