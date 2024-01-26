import { Component, computed, effect, signal } from '@angular/core';

// NG0203: effect() can only be used within an injection context such as a constructor

// effect start as dirty and will run at least once

// effects are currently scheduled to run when Angular change detects and refreshes view

@Component({
  selector: 'app-effect',
  standalone: true,
  template: ``,
})
export class EffectComponent {
  constructor() {
    const counter = signal(0);

    effect(() => {
      console.log(`Effect count: ${counter()}`);
    });

    // logs 4 one time - it will execute the signal on change detection

    counter.set(1);
    counter.set(2);
    counter.update((current) => current + 1);
    counter.update((current) => current + 1);
  }
}
