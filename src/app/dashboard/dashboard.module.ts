import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceSidebarComponent } from './components/device-sidebar/device-sidebar.component';
import { DisplayDeviceDetailsComponent } from './components/display-device-details/display-device-details.component';
import { HeaderComponent } from './components/header/header.component';
import {DashboardRoutingModule} from './dashboard-routing/dashboard-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule,FormsModule  } from '@angular/forms';
import { DashboardService } from './services/dashboard.service';
import {DemoMaterialModule} from './material-module';
import { DialogOverviewExample, DialogOverviewExampleDialog } from './components/dialog/dialog.component';
import { DashboardRootComponent } from './components/dashboard-root/dashboard-root.component';

@NgModule({
  declarations: [DeviceSidebarComponent, DisplayDeviceDetailsComponent, HeaderComponent, DialogOverviewExample,DialogOverviewExampleDialog, DashboardRootComponent],
  entryComponents: [DialogOverviewExample, DialogOverviewExampleDialog],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    // BrowserAnimationsModule,
    DemoMaterialModule,    
  ],
 
  providers: [DashboardService]
})
export class DashboardModule { }
