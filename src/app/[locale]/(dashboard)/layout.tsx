// src/app/[locale]/(dashboard)/layout.tsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar de dashboard */}
      <nav className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex">
              <div className="flex shrink-0 items-center">
                <span className="text-xl font-bold">Petzy Dashboard</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
}