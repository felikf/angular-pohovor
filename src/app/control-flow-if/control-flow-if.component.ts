import { Component } from '@angular/core';
import { of } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-control-flow-if',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './control-flow-if.component.html',
  styleUrl: './control-flow-if.component.scss',
})
export class ControlFlowIfComponent {
  o$ = of('async');
}
