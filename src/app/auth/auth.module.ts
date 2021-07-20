import { NgModule } from '@angular/core';
import { AuthSharedModule } from './auth-shared.module';
import { AuthRoutingModule } from './auth.router';

@NgModule({
  declarations: [],
  imports: [AuthSharedModule, AuthRoutingModule],
  exports: [AuthSharedModule],
})
export class AuthModule {}
