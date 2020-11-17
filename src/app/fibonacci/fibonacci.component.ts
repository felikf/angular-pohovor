import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.scss']
})
export class FibonacciComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Jako Fibonacciho posloupnost je v matematice označována nekonečná posloupnost přirozených čísel, začínající:
   *
   * 0, 1, 1, 2, 3, 5, 8, 13, 21
   *
   * F(n) = 0                 --- pro n = 0
   * F(n) = 1                 --- pro n = 1
   * F(n) = F(n-1) + F(n-2)   --- pro n > 1
   * @param n index
   */
  fib(n): number {
    return 0;
  }

}
