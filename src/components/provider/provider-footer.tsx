import type { SVGProps } from "react";

// TODO: lucide-react ya no incluye iconos de marcas (Facebook/Instagram/TikTok);
// se usan SVGs propios minimalistas. Si luego quieres el set oficial, instala "react-icons" o "simple-icons".

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.5c0-.9.25-1.5 1.6-1.5H16.5V4.3c-.28-.04-1.25-.13-2.37-.13-2.35 0-3.96 1.43-3.96 4.06V10.5H8v3h2.17V21h3.33z" />
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.7-1.2A9 9 0 1 0 12 3zm0 1.8a7.2 7.2 0 1 1 0 14.4 7.1 7.1 0 0 1-3.6-1l-.26-.15-2.6.68.7-2.53-.17-.27A7.2 7.2 0 0 1 12 4.8zm3.9 8.9c-.2-.1-1.2-.6-1.4-.66-.19-.07-.33-.1-.47.1-.14.2-.53.66-.65.8-.12.14-.24.15-.45.05-.2-.1-.86-.32-1.65-1.02-.6-.55-1-1.22-1.13-1.42-.12-.2-.01-.32.09-.42.1-.1.2-.24.3-.36.1-.12.14-.2.2-.34.07-.14.03-.26-.02-.36-.05-.1-.47-1.13-.65-1.55-.17-.4-.35-.35-.47-.36h-.4c-.14 0-.36.05-.55.26-.19.2-.72.7-.72 1.72s.74 2 .84 2.14c.1.14 1.46 2.23 3.54 3.13.5.2.87.33 1.17.42.49.15.94.13 1.3.08.4-.06 1.2-.49 1.37-.96.17-.47.17-.87.12-.96-.05-.09-.18-.14-.38-.24z" />
    </svg>
  );
}

interface ProviderFooterProps {
  facebookUrl?: string;
  instagramUrl?: string;
  whatsappUrl?: string;
  tiktokUrl?: string;
}

export function ProviderFooter({
  facebookUrl,
  instagramUrl,
  whatsappUrl,
  tiktokUrl,
}: ProviderFooterProps) {
  const links = [
    { url: facebookUrl, Icon: FacebookIcon, label: "Facebook" },
    { url: instagramUrl, Icon: InstagramIcon, label: "Instagram" },
    { url: whatsappUrl, Icon: WhatsAppIcon, label: "WhatsApp" },
  ].filter((link) => Boolean(link.url));

  return (
    <footer className="flex justify-center gap-4 px-4 py-4 text-muted-foreground">
      {links.map(({ url, Icon, label }) => (
        <a key={label} href={url} aria-label={label} target="_blank" rel="noopener noreferrer">
          <Icon className="h-4 w-4" />
        </a>
      ))}
      {/* TODO: agregar TikTok con el mismo patron de SVG propio, usando tiktokUrl */}
    </footer>
  );
}
