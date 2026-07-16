import Link from "next/link"

export interface SectionHeadingProps {
  title: string
  viewAllHref?: string
  viewAllLabel?: string
}

export function SectionHeading({
  title,
  viewAllHref,
  viewAllLabel = "Ver todas",
}: SectionHeadingProps) {
  return (
    <div className="relative mb-6 flex flex-col items-center gap-2 text-center">
      <h2 className="text-xl font-extrabold text-foreground sm:text-2xl">{title}</h2>
      <span className="h-1 w-10 rounded-full bg-primary" />
      {viewAllHref && (
        <Link
          href={viewAllHref}
          className="hidden text-sm font-semibold text-primary transition-opacity hover:opacity-70 sm:absolute sm:right-0 sm:top-1 sm:block"
        >
          {viewAllLabel} →
        </Link>
      )}
    </div>
  )
}
