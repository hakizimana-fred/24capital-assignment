import type { NavItem } from '@/types';

export const navigationItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: 'Grid2x2', href: '/', group: 'main' },
  { id: 'compliance', label: 'Compliance', icon: 'ShieldCheck', href: '/', group: 'main' },
  { id: 'transfers', label: 'Transfers', icon: 'ArrowLeftRight', href: '/', group: 'main' },
  {
    id: 'messages',
    label: 'Messages',
    icon: 'AlignHorizontalDistributeCenter',
    href: '/',
    group: 'main',
  },
  { id: 'funds', label: 'Funds', icon: 'Briefcase', href: '/', group: 'main' },
  { id: 'reports', label: 'Reports', icon: 'Clock8', href: '/reports', group: 'main' },
  {
    id: 'analytics',
    label: 'Analytics',
    icon: 'ChartNoAxesColumn',
    href: '/analytics',
    group: 'main',
  },
  { id: 'team', label: 'Team', icon: 'UserRoundSearch', href: '/', group: 'main' },
  { id: 'settings', label: 'Settings', icon: 'Settings', href: '/', group: 'others' },
  { id: 'help', label: 'Help', icon: 'HelpCircle', href: '/', group: 'others' },
];
