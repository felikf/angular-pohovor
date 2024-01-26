import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignalComponent } from './signal.component';
import { ComputedComponent } from './computed.component';
import { EffectComponent } from './effect.component';
import { Effect2Component } from './effect2.component';
import { Effect3Component } from './effect3.component';
import { ControlFlowIfComponent } from './control-flow-if/control-flow-if.component';
import { ControlFlowForComponent } from './control-flow-for/control-flow-for.component';
import { ControlFlowSwitchComponent } from './control-flow-switch/control-flow-switch.component';
import { DeferrableViewsComponent } from './deferrable-views/deferrable-views.component';

/**
 * https://angularexperts.io/blog/angular-signals-push-pull
 */
@Component({
  selector: 'app-root',
  template: `
    <div class="flex flex-col justify-between gap-32 h-screen">
      <div class="section">
        <app-signal></app-signal>
        <!--<app-computed></app-computed>-->
        <!--      <app-effect></app-effect>-->
        <!--      <app-effect2></app-effect2>-->
        <!--      <app-effect3></app-effect3>-->

        <!--        <app-control-flow-if></app-control-flow-if>-->
        <!--        <app-control-flow-for></app-control-flow-for>-->
        <!--        <app-control-flow-switch></app-control-flow-switch>-->
        <!--        <app-deferrable-views></app-deferrable-views>-->
      </div>

      <div class="section">
        <ul class="list-disc">
          <li>
            <a
              href="https://angularexperts.io/blog/angular-signals-push-pull"
              class="text-blue-900 underline"
              target="_blank"
              >Signals</a
            >
          </li>
        </ul>
      </div>
    </div>
  `,
  standalone: true,
  imports: [
    CommonModule,
    SignalComponent,
    ComputedComponent,
    EffectComponent,
    Effect2Component,
    Effect3Component,
    ControlFlowIfComponent,
    ControlFlowForComponent,
    ControlFlowSwitchComponent,
    DeferrableViewsComponent,
  ],
})
export class AppComponent {}
