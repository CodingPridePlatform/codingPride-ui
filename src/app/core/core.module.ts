import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { UserModule } from '../modules/user/user.module';
import { CoreComponent } from './core.component';
import { BodyComponent } from './containers/body/body.component';
import { HeaderComponent } from './containers/header/header.component';
import { FooterComponent } from './containers/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { ProfileInfoComponent } from './components/profile-info/profile-info.component';

@NgModule({
  declarations: [
    CoreComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    NavComponent,
    ProfileInfoComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    UserModule,
  ],
  exports: [CoreComponent],
})
export class CoreModule {}
