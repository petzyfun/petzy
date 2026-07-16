import { Header } from "@/components/shared/header"
import { Footer } from "@/components/shared/footer"
import { Button } from "@/components/ui/button"
import { Field, FieldGroup, FieldLegend, FieldSet } from "@/components/ui/field"

import { BoneButton } from "@/components/shared/bone-button"
import { AdCarousel } from "@/components/home/hero/ad-carousel"
import { SearchBar } from "@/components/home/search-bar"
import { CategoryRow } from "@/components/home/category-row"
import { VetsRow } from "@/components/home/vets/vets-row"
import { featuredVets } from "@/components/home/vets/vets-data"
import { AdBanner } from "@/components/home/hero/ad-banner"
import { PetsAdoptionGrid } from "@/components/home/pets/pets-adoption-grid"
import { featuredPets } from "@/components/home/pets/pets-data"
import { AssociationsRow } from "@/components/home/associations/associations-row"
import { featuredAssociations } from "@/components/home/associations/associations-data"
import { FaqSection } from "@/components/home/faq-section"
import { faqItems } from "@/components/home/faq-data"
import { SectionFrame } from "@/components/home/section-frame"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"

export default function HomePage() {
  return (
    <div>
      <Header />
      <AdCarousel />
      <div className="mx-auto mt-6 w-full max-w-7xl px-4">
        <SearchBar />
      </div>
      <CategoryRow />
      <VetsRow vets={featuredVets} />
      <AdBanner imageUrl="/images/hero/ad-banner.png" alt="Anuncio destacado"/>
      <div className="mt-10">
        <PetsAdoptionGrid pets={featuredPets} />
      </div>
      <AssociationsRow associations={featuredAssociations} />
      <div className="mt-10">
        <SectionFrame>
        <FaqSection items={faqItems} />
        </SectionFrame>
      </div>

      <Footer />
    </div>
  );
}