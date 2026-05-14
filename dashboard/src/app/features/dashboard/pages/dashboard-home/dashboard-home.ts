import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetCard } from '../../../../shared/components/widget-card/widget-card';
import { ALL_WIDGETS, WidgetItem } from '../../../../core/config/widget.config';
import { DragDropModule, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { DashboardLayout } from '../../../../core/services/dashboard-layout';

@Component({
  selector: 'app-dashboard-home',
  imports: [CommonModule, WidgetCard, DragDropModule],
  templateUrl: './dashboard-home.html',
  styleUrl: './dashboard-home.css',
})
export class DashboardHome {
  constructor(private layoutService: DashboardLayout) {}
  ngOnInit() {
    const saved = this.layoutService.loadLayout();

    if (saved.length > 0) {
      this.widgets = saved.map((w) => ({
        ...w,
        size: w.size || 'md',
        colClass: this.getColClass(w.size || 'md'), // ✅ FIX
      }));
    }
  }

  widgets: WidgetItem[] = [
    { id: 'stats', title: 'Statistics', size: 'md', colClass: 'col-md-6 col-lg-4' },
    { id: 'sales', title: 'Sales', size: 'md', colClass: 'col-md-6 col-lg-4' },
  ];

  allWidgets = ALL_WIDGETS;

  showModal = false;

  get availableWidgets(): WidgetItem[] {
    return this.allWidgets.filter((w) => !this.widgets.find((existing) => existing.id === w.id));
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  addWidget(widget: WidgetItem) {
    this.widgets.push(widget);
    this.layoutService.saveLayout(this.widgets);
    this.closeModal();
  }

  removeWidget(id: string) {
    this.widgets = this.widgets.filter((w) => w.id !== id);
    this.layoutService.saveLayout(this.widgets);
  }

  updateSize(id: string, size: 'sm' | 'md' | 'lg') {
    this.widgets = this.widgets.map((w) => {
      if (w.id === id) {
        return {
          ...w,
          size,
          colClass: this.getColClass(size), // ✅ store value
        };
      }
      return w;
    });

    this.layoutService.saveLayout(this.widgets);
  }

  trackById(index: number, item: any) {
    return item.id;
  }

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.widgets, event.previousIndex, event.currentIndex);
    this.layoutService.saveLayout(this.widgets);
  }

  resetLayout() {
    this.widgets = [];
    this.layoutService.clearLayout();
  }

  getColClass(size: string) {
    console.log('SIZE:', size); // 👈 DEBUG

    switch (size) {
      case 'sm':
        return 'col-md-4 col-lg-3';
      case 'md':
        return 'col-md-6 col-lg-4';
      case 'lg':
        return 'col-md-12 col-lg-6';
      default:
        return 'col-md-6 col-lg-4';
    }
  }
}
