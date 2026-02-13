import type { NavItem } from '@/types';

export const navigationItems: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: 'LayoutDashboard', href: '/', group: 'main' },
  { id: 'funds', label: 'Funds', icon: 'Briefcase', href: '/', group: 'main' },
  { id: 'messages', label: 'Messages', icon: 'MessageSquare', href: '/', group: 'main' },
  { id: 'documents', label: 'Documents', icon: 'FileText', href: '/', group: 'main' },
  { id: 'transfers', label: 'Transfers', icon: 'ArrowLeftRight', href: '/', group: 'main' },
  { id: 'reports', label: 'Reports', icon: 'BarChart3', href: '/', group: 'main' },
  { id: 'compliance', label: 'Compliance', icon: 'ShieldCheck', href: '/', group: 'main' },
  { id: 'analytics', label: 'Analytics', icon: 'TrendingUp', href: '/analytics', group: 'main' },
  { id: 'team', label: 'Team', icon: 'Users', href: '/', group: 'main' },
  { id: 'settings', label: 'Settings', icon: 'Settings', href: '/', group: 'others' },
  { id: 'help', label: 'Help', icon: 'HelpCircle', href: '/', group: 'others' },
];
