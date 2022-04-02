import { Directive, ElementRef, Renderer2, HostListener, Input, OnInit, OnDestroy } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { BaseControlValueAccessorDirective } from './base-control-value-accessor.directive';

@Directive({
  selector: '[appDebounceInput]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: DebounceInputDirective,
    multi: true,
  }],
  exportAs: 'appDebounce',
})
export class DebounceInputDirective extends BaseControlValueAccessorDirective implements ControlValueAccessor, OnInit, OnDestroy {

  private debounceTimeValue = 500;

  @Input()
  set debounceTime(value: number | string) {
    this.debounceTimeValue = +value;
    this.ngOnDestroy();
    this.createSubscription();
  }

  private input$ = new Subject<string>();
  private subscription: Subscription;

  ngOnInit(): void {
    this.subscription = this.createSubscription();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }

  @HostListener('input', ['$event.target.value'])
  input(value: string): void {
    this.input$.next(value);
  }

  @HostListener('blur')
  blur(): void {
    this.onTouched();
  }

  writeValue(value: string): void {
    const normalizedValue = value == null ? '' : value;
    this.setProperty('value', normalizedValue);
  }

  private createSubscription(): Subscription {
    return this.input$.pipe(
      debounceTime(this.debounceTimeValue)
    ).subscribe(input => this.onChange(input));
  }
}
