'use client';

import { SidebarNavItem } from '@/components/molecules/SidebarNavItem';
import { navigationItems } from '@/data/navigation';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export function Sidebar() {
  const pathname = usePathname();

  const mainItems = navigationItems.filter((item) => item.group === 'main');
  const otherItems = navigationItems.filter((item) => item.group === 'others');

  return (
    <aside className="sticky top-0 z-30 hidden h-screen w-sidebar shrink-0 flex-col items-center border-r border-border-light bg-sidebar-bg py-5 md:flex">
      {/* Logo */}
      <div className="mb-6 flex h-10 w-10 items-center justify-center">
        <Image src="/images/logo.png" alt="24 Capital" width={40} height={40} />
      </div>

      {/* Main nav */}
      <nav className="flex flex-col items-center gap-1">
        <span className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-sidebar-label">
          Main
        </span>
        {mainItems.map((item) => (
          <SidebarNavItem
            key={item.id}
            item={item}
            isActive={
              item.href === '/'
                ? pathname === '/' && item.id === 'dashboard'
                : pathname.startsWith(item.href)
            }
          />
        ))}

        {/* Others */}
        <span className="mb-2 mt-3 text-[10px] font-semibold uppercase tracking-widest text-sidebar-label">
          Others
        </span>
        {otherItems.map((item) => (
          <SidebarNavItem
            key={item.id}
            item={item}
            isActive={pathname.startsWith(item.href) && item.href !== '/'}
          />
        ))}
      </nav>

      {/* User avatar */}
      <div className="mt-auto">
        <Image
          src="/images/avatar.png"
          alt="User avatar"
          width={36}
          height={36}
          className="rounded-full"
        />
      </div>
    </aside>
  );
}
