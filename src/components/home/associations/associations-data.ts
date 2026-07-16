import type { AssociationCardProps } from "@/components/ui/association-card"

export const featuredAssociations: (AssociationCardProps & { id: string })[] = [
  {
    id: "1",
    name: "Patitas Felices",
    tagline: "Rescate y adopción",
    logoUrl: "/images/associations/logo-1.jpg",
    backgroundUrl: "/images/associations/asociacion-1.jpg",
    href: "/asociaciones/patitas-felices",
  },
  {
    id: "2",
    name: "Huellitas Chiapas",
    tagline: "Ayudando a crecer",
    logoUrl: "/images/associations/logo-2.jpg",
    backgroundUrl: "/images/associations/asociacion-2.jpg",
    href: "/asociaciones/huellitas-chiapas",
  },
  {
    id: "3",
    name: "Amigos de 4 Patas",
    tagline: "Rescate animal",
    logoUrl: "/images/associations/logo-3.jpg",
    backgroundUrl: "/images/associations/asociacion-3.jpg",
    href: "/asociaciones/amigos-4-patas",
  },
  {
    id: "4",
    name: "Hogar de Peludos",
    tagline: "Refugio y adopción",
    logoUrl: "/images/associations/logo-4.jpg",
    backgroundUrl: "/images/associations/asociacion-4.jpg",
    href: "/asociaciones/hogar-peludos",
  },
  {
    id: "5",
    name: "Misión Bigotes",
    tagline: "Rescate y protección",
    logoUrl: "/images/associations/asociacion-5.jpg",
    backgroundUrl: "/images/associations/asociacion-5.jpg",
    href: "/asociaciones/mision-bigotes",
  },
]
