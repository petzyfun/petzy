// src/app/[locale]/(main)/layout.tsx
import { ReactNode } from 'react';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      {/* Header compartido */}
      <header className="border-b">
        <nav className="container mx-auto px-4 py-4">
          {/* Navbar */}
        </nav>
      </header>
      
      <main>{children}</main>
      
      {/* Footer compartido */}
      <footer className="border-t">
        <div className="container mx-auto px-4 py-8">
          {/* Footer */}
        </div>
      </footer>
    </div>
  );
}