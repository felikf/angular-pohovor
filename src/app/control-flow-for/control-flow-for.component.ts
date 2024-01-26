import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-control-flow-for',
  standalone: true,
  imports: [NgClass],
  templateUrl: './control-flow-for.component.html',
  styleUrl: './control-flow-for.component.scss',
})
export class ControlFlowForComponent {
  items = [
    { id: 1, name: 'apple' },
    { id: 2, name: 'banana' },
    { id: 3, name: 'orange' },
    { id: 4, name: 'pear' },
    { id: 5, name: 'grape' },
    { id: 6, name: 'pineapple' },
    { id: 7, name: 'kiwi' },
    { id: 8, name: 'mango' },
    { id: 9, name: 'strawberry' },
    { id: 10, name: 'blueberry' },
  ];

  empty = [];
}
