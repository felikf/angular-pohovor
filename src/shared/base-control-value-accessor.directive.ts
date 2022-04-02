import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive()
export class BaseControlValueAccessorDirective {
  /**
   * The registered callback function called when a change or input event occurs on the input
   * element.
   * @nodoc
   */
  onChange = (_: any) => {};

  /**
   * The registered callback function called when a blur event occurs on the input element.
   * @nodoc
   */
  onTouched = () => {};

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  /**
   * Helper method that sets a property on a target element using the current Renderer
   * implementation.
   * @nodoc
   */
  protected setProperty(key: string, value: any): void {
    this.renderer.setProperty(this.elementRef.nativeElement, key, value);
  }

  /**
   * Registers a function called when the control is touched.
   * @nodoc
   */
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  /**
   * Registers a function called when the control value changes.
   * @nodoc
   */
  registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  /**
   * Sets the "disabled" property on the range input element.
   * @nodoc
   */
  setDisabledState(isDisabled: boolean): void {
    this.setProperty('disabled', isDisabled);
  }
}
