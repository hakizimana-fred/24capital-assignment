import { Sidebar } from '@/components/organisms/Sidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-surface-page">
      <Sidebar />
      <main className="ml-[72px] p-6">
        <div className="mx-auto max-w-content">{children}</div>
      </main>
    </div>
  );
}
