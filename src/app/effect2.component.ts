import { Component, computed, effect, signal } from '@angular/core';

// NG0203: effect() can only be used within an injection context such as a constructor

@Component({
  selector: 'app-effect2',
  standalone: true,
  imports: [],
  template: `
    <div>Count {{ counter() }}</div>
    <button (click)="increment()" class="btn btn-blue">Increment</button>
  `,
})
export class Effect2Component {
  counter = signal(0);

  constructor() {
    console.log(`Counter: ${this.counter()}`);

    effect(() => console.log(`Effect count: ${this.counter()}`));
  }

  increment(): void {
    this.counter.update((count) => count + 1);
    this.counter.update((count) => count + 1);
    this.counter.update((count) => count + 1);
  }
}
