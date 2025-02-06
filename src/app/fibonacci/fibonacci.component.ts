import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.scss'],
  standalone: false
})
export class FibonacciComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  fib(n): number {
    return 0;
  }

}
