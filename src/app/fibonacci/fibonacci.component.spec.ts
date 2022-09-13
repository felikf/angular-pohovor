import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FibonacciComponent } from './fibonacci.component';

describe('FibonacciComponent', () => {
  let component: FibonacciComponent;
  let fixture: ComponentFixture<FibonacciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [FibonacciComponent],
    teardown: { destroyAfterEach: false }
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FibonacciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('should calculate fibonacci', () => {
    it('for 0', () => {
      expect(component.fib(0)).toBe(0);
    });

    it('for 1', () => {
      expect(component.fib(1)).toBe(1);
    });

    it('for 2', () => {
      expect(component.fib(2)).toBe(1);
    });

    it('for 3', () => {
      expect(component.fib(3)).toBe(2);
    });

    it('for 4', () => {
      expect(component.fib(4)).toBe(3);
    });

    it('for 5', () => {
      expect(component.fib(5)).toBe(5);
    });

    it('for 6', () => {
      expect(component.fib(6)).toBe(8);
    });
  });
});
