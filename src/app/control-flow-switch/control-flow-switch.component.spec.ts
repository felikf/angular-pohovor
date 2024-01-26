import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlFlowSwitchComponent } from './control-flow-switch.component';

describe('ControlFlowSwitchComponent', () => {
  let component: ControlFlowSwitchComponent;
  let fixture: ComponentFixture<ControlFlowSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlFlowSwitchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ControlFlowSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
