// src/app/[locale]/(admin)/layout.tsx
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar de admin */}
      <nav className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex">
              <div className="flex shrink-0 items-center">
                <span className="text-xl font-bold">Petzy Admin</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
}