import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../../services/dashboard.service'
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogOverviewExampleDialog } from '../dialog/dialog.component';

@Component({
  selector: 'app-dashboard-root',
  templateUrl: './dashboard-root.component.html',
  styleUrls: ['./dashboard-root.component.css']
})
export class DashboardRootComponent implements OnInit {

 
  deviceList: any;
  modalForm: FormGroup;
  public userName:string; 
  constructor(
    private dialog: MatDialog,
    changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private DashboardService:DashboardService,private formBuilder: FormBuilder,private router:Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.deviceList = [];
    this.userName = DashboardService.getUserName();
  }
  
  ngOnInit() {
    this.DashboardService.displayDevices().subscribe(data =>{           
      this.deviceList=data;            
    }) 

    //this.createForm();  
  }

  openDialog(deviceId: string): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      height: '400px',
      width: '600px',
      data: { deviceId },
      
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.animal = result;
    // });
  }

  // private createForm() {
  //   this.modalForm = this.formBuilder.group({
  //     fThTemp: '',
  //     fActionTime: '',
  //     frequencyOfData:'',
  //     aThTemp:'',
  //     aActionTime:''
  //   });
  // }
  // submitModal(){
  //   console.log(this.modalForm.value);

  // }
  removeUser(){    
    this.DashboardService.logout();    
    this.router.navigate(['/']);
  }

  mobileQuery: MediaQueryList;

  // fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  

  private _mobileQueryListener: () => void;

  

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = true
}
