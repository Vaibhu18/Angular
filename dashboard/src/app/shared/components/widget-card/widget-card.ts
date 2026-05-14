import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-widget-card',
  imports: [CommonModule],
  templateUrl: './widget-card.html',
  styleUrl: './widget-card.css',
})
export class WidgetCard {
  @Input() title: string = '';
  @Output() remove = new EventEmitter<void>();
  @Output() resize = new EventEmitter<'sm' | 'md' | 'lg'>();

  onResize(size: 'sm' | 'md' | 'lg') {
    console.log('Child sending:', size); // 👈 DEBUG
    this.resize.emit(size);
  }
}
