export interface WidgetItem {
  id: string;
  title: string;
  size?: 'sm' | 'md' | 'lg';
  colClass?: string;
}

export const ALL_WIDGETS: WidgetItem[] = [
  { id: 'stats', title: 'Statistics', size: 'md', colClass: 'col-md-6 col-lg-4' },
  { id: 'sales', title: 'Sales', size: 'md', colClass: 'col-md-6 col-lg-4' },
  { id: 'activity', title: 'Activity', size: 'md', colClass: 'col-md-6 col-lg-4' },
  { id: 'reports', title: 'Reports', size: 'md', colClass: 'col-md-6 col-lg-4' },
  { id: 'users', title: 'Users', size: 'md', colClass: 'col-md-6 col-lg-4' },
];
