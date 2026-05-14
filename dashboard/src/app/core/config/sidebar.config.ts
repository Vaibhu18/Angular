export interface SidebarItem {
  label: string;
  icon: string;
  route: string;
}

export const SIDEBAR_ITEMS: SidebarItem[] = [
  {
    label: 'Dashboard',
    icon: 'bi-speedometer2',
    route: '/dashboard',
  },
  {
    label: 'Analytics',
    icon: 'bi-bar-chart',
    route: '/analytics',
  },
  {
    label: 'Users',
    icon: 'bi-people',
    route: '/users',
  },
  {
    label: 'Settings',
    icon: 'bi-gear',
    route: '/settings',
  },
];
