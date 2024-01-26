import { Component } from '@angular/core';
import { map, timer } from 'rxjs';

@Component({
  selector: 'app-control-flow-switch',
  standalone: true,
  imports: [],
  templateUrl: './control-flow-switch.component.html',
  styleUrl: './control-flow-switch.component.scss',
})
export class ControlFlowSwitchComponent {
  fruits = [
    'apple',
    'banana',
    'orange',
    'pear',
    'grape',
    'pineapple',
    'kiwi',
    'mango',
    'strawberry',
    'blueberry',
  ];
  fruit = 'apple';

  a = timer(1000, 1000)
    .pipe(
      map(() => Math.floor(Math.random() * 10)),
      map((i) => this.fruits[i]),
    )
    .subscribe((fruit) => (this.fruit = fruit));
}
