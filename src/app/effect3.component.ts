import { Component, computed, effect, signal } from '@angular/core';

// NG0203: effect() can only be used within an injection context such as a constructor

@Component({
  selector: 'app-effect3',
  standalone: true,
  imports: [],
  template: `
    <div>Counter {{ counter() }}</div>
    <button (click)="increment()" class="btn btn-blue">Increment</button>
  `,
})
export class Effect3Component {
  counter = signal(0);
  constructor() {
    console.log(`counter: ${this.counter()}`);

    const isEven = computed(() => this.counter() % 2 === 0);

    effect(() => {
      console.log(`Effect counter: ${isEven()}`);
    });
  }

  increment(): void {
    this.counter.update((counter) => counter + 2);
  }
}
