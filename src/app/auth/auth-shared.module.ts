import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { CONTAINERS } from './containers';

@NgModule({
  declarations: [...CONTAINERS],
  imports: [CommonModule, SharedModule],
  exports: [...CONTAINERS],
})
export class AuthSharedModule {}
