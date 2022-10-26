import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { httpInterceptors } from './interceptors';

@NgModule({
  declarations: [],
  imports: [CommonModule, SharedRoutingModule],
  providers: [httpInterceptors], // all interceptors are services
})
export class SharedModule {}
