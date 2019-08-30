
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth.guard';
import { DashboardRootComponent } from '../dashboard/components/dashboard-root/dashboard-root.component';
const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'dashboard' ,loadChildren:'../dashboard/dashboard.module#DashboardModule',canActivate: [AuthGuard] },
  // {path:'dashboard' ,component:DeviceSidebarComponent}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[CommonModule] //shared
})
export class AuthRoutingModule { }



