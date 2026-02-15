import { Sidebar } from '@/components/organisms/Sidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex min-h-screen bg-surface-page">
      <Sidebar />
      <main className="flex-1 min-w-0 p-4 md:p-6">
        <div className="mx-auto max-w-content">{children}</div>
      </main>
    </div>
  );
}
