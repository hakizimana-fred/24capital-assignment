'use client';

import { usePathname } from 'next/navigation';
import { SidebarNavItem } from '@/components/molecules/SidebarNavItem';
import { navigationItems } from '@/data/navigation';

export function Sidebar() {
  const pathname = usePathname();

  const mainItems = navigationItems.filter((item) => item.group === 'main');
  const otherItems = navigationItems.filter((item) => item.group === 'others');

  return (
    <aside className="fixed left-0 top-0 z-30 flex h-screen w-sidebar flex-col items-center border-r border-border-light bg-sidebar-bg py-5">
      {/* Logo */}
      <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary">
        <span className="text-lg font-bold text-txt-inverse">24</span>
      </div>

      {/* Main nav */}
      <nav className="flex flex-1 flex-col items-center gap-1">
        <span className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-sidebar-label">
          Main
        </span>
        {mainItems.map((item) => (
          <SidebarNavItem
            key={item.id}
            item={item}
            isActive={
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href)
            }
          />
        ))}
      </nav>

      {/* Others nav */}
      <nav className="flex flex-col items-center gap-1 pb-2">
        <span className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-sidebar-label">
          Others
        </span>
        {otherItems.map((item) => (
          <SidebarNavItem
            key={item.id}
            item={item}
            isActive={pathname.startsWith(item.href) && item.href !== '/'}
          />
        ))}

        {/* User avatar */}
        <div className="mt-4 flex h-9 w-9 items-center justify-center rounded-full bg-brand-secondary text-xs font-bold text-txt-inverse">
          JD
        </div>
      </nav>
    </aside>
  );
}
