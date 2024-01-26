import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-computed',
  standalone: true,
  imports: [],
  template: `
    <div>Count {{ count() }}</div>
    <div>Event {{ even() }}</div>
    <button (click)="increment()" class="btn btn-blue">Increment</button>
  `,
  styles: ``,
})
export class ComputedComponent {
  count = signal(0);
  even = computed(() => this.count() % 2 === 0);

  increment(): void {
    this.count.update((count) => count + 1);
  }
}
