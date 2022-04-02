import { Directive, HostListener, OnInit, Optional } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appInputRef]',
})
export class InputRefDirective implements OnInit {

  // take each slider step TODO debounce?
  @HostListener('input', ['$event.value'])
  onInput(value: number): void {
    this.ngControl?.control?.setValue(value, { emitEvent: false });
  }

  constructor(@Optional() private ngControl: NgControl) {}

  // synchronize inputs on same form control
  ngOnInit(): void {
    this.ngControl?.valueChanges?.subscribe(
      value => this.ngControl?.control?.setValue(value, { emitEvent: false })
    );
  }
}
