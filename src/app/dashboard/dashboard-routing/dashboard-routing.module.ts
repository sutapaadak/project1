
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';

import { DeviceSidebarComponent } from '../components/device-sidebar/device-sidebar.component';
import { DisplayDeviceDetailsComponent } from '../components/display-device-details/display-device-details.component';
import { DashboardRootComponent } from '../components/dashboard-root/dashboard-root.component';
const routes: Routes=[   
    {
      path: "",
      component: DashboardRootComponent,
      children: [
        { path:'devices/:id', component: DisplayDeviceDetailsComponent }
      ]
    }
]
export const routing: ModuleWithProviders = RouterModule.forChild(routes);
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class DashboardRoutingModule { }

