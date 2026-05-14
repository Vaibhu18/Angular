import { Injectable } from '@angular/core';
import { WidgetItem } from '../config/widget.config';

const STORAGE_KEY = 'dashboard_layout';

@Injectable({
  providedIn: 'root',
})
export class DashboardLayout {
  saveLayout(widgets: WidgetItem[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(widgets));
  }

  loadLayout(): WidgetItem[] {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }

  clearLayout() {
    localStorage.removeItem(STORAGE_KEY);
  }
}
