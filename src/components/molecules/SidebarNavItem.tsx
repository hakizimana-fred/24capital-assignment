'use client';

import { cn } from '@/lib/cn';
import Link from 'next/link';
import {
  LayoutDashboard,
  Briefcase,
  MessageSquare,
  FileText,
  ArrowLeftRight,
  BarChart3,
  ShieldCheck,
  TrendingUp,
  Users,
  Settings,
  HelpCircle,
} from 'lucide-react';
import type { NavItem } from '@/types';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  LayoutDashboard,
  Briefcase,
  MessageSquare,
  FileText,
  ArrowLeftRight,
  BarChart3,
  ShieldCheck,
  TrendingUp,
  Users,
  Settings,
  HelpCircle,
};

interface SidebarNavItemProps {
  item: NavItem;
  isActive: boolean;
}

export function SidebarNavItem({ item, isActive }: SidebarNavItemProps) {
  const Icon = iconMap[item.icon];

  return (
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
  );
}
