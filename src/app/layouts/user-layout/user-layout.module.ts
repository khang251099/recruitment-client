import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { UserLayoutRoutingModule } from './user-layout-routing.module';
import { UserLayoutComponent } from './user-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    UserLayoutComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,  
    MatButtonModule,  
    UserLayoutRoutingModule
  ]
})
export class UserLayoutModule { }
