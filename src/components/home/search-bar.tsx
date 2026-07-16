"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"

export function SearchBar() {
  const [query, setQuery] = useState("")

  const handleSearch = () => {
    // TODO: conectar con tu lógica real de búsqueda / navegación
    console.log("Buscando:", query)
  }

  return (
    <InputGroup className="mx-auto w-full max-w-2xl rounded-full border-none bg-white shadow-sm [--radius:9999px]">
      <InputGroupAddon>
        <Search className="h-5 w-5 text-muted-foreground" />
      </InputGroupAddon>
      <InputGroupInput
        placeholder="Veterinaria, refugio o adopciones..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
      />
      <InputGroupAddon align="inline-end">
        <InputGroupButton
          onClick={handleSearch}
          className="h-9 rounded-full bg-primary px-6 font-bold text-primary-foreground hover:bg-primary/90"
        >
          Buscar
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  )
}
