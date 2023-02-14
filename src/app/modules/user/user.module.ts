import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { RegistrationComponent } from './components/registration/registration.component';
import { UserHomepageComponent } from './containers/user-homepage/user-homepage.component';
import { UserComponent } from './user.component';

@NgModule({
  declarations: [
    RegistrationComponent,
    UserHomepageComponent,
    UserComponent,
  ],
  exports: [
    UserRoutingModule,
    RegistrationComponent,
    UserHomepageComponent,
    UserComponent,
  ],
  imports: [CommonModule, UserRoutingModule],
})
export class UserModule {}
