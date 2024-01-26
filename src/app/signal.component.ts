import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  template: `
    <div>Count: {{ count() }}</div>
    <button (click)="increment()" class="btn btn-blue">Increment</button>
  `,
})
export class SignalComponent {
  count = signal(0);

  constructor() {
    console.log(`count: ${this.count()}`);

    this.count.set(5);
  }

  increment(): void {
    this.count.update((count) => count + 1);
  }
}
