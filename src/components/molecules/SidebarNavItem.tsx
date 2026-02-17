'use client';

import { cn } from '@/lib/cn';
import type { NavItem } from '@/types';
import {
  AlignHorizontalDistributeCenter,
  ArrowLeftRight,
  BarChart3,
  Briefcase,
  ChartNoAxesColumn,
  Clock8,
  FileText,
  Grid2x2,
  HelpCircle,
  Settings,
  ShieldCheck,
  UserRoundSearch,
} from 'lucide-react';
import Link from 'next/link';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Grid2x2,
  Briefcase,
  AlignHorizontalDistributeCenter,
  FileText,
  ArrowLeftRight,
  BarChart3,
  ShieldCheck,
  ChartNoAxesColumn,
  UserRoundSearch,
  Settings,
  HelpCircle,
  Clock8,
};

interface SidebarNavItemProps {
  item: NavItem;
  isActive: boolean;
}

export function SidebarNavItem({ item, isActive }: SidebarNavItemProps) {
  const Icon = iconMap[item.icon];

  return (
    <div className="relative flex items-center">
      {isActive && (
        <span className="absolute -left-4.25 h-6 w-0.75 rounded-r-full bg-sidebar-icon-active" />
      )}
      <Link
        href={item.href}
        className={cn(
          'flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-fast',
          isActive
            ? 'bg-brand-primary-light text-sidebar-icon-active'
            : 'text-sidebar-icon hover:bg-surface-alt hover:text-txt-secondary',
        )}
        title={item.label}
      >
        {Icon && <Icon className="h-5 w-5" />}
      </Link>
    </div>
  );
}
