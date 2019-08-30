import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule  } from '@angular/forms';
// import {AuthService} from './services/auth.service';
import{HttpClientModule} from '@angular/common/http';
import {AuthRoutingModule} from './auth-routing.module'
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AuthRoutingModule
  ],
  // providers: [AuthService]
})
export class AuthModule { }
