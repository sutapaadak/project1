import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {DashboardService} from '../../services/dashboard.service'
@Component({
  selector: 'app-display-device-details',
  templateUrl: './display-device-details.component.html',
  styleUrls: ['./display-device-details.component.css']
})
export class DisplayDeviceDetailsComponent implements OnInit {
  private id ;
  deviceDetails:any;
 
  constructor(private Activatedroute:ActivatedRoute,private httpClient: HttpClient,
    private DashboardService:DashboardService) {
    this.deviceDetails=[]
   }

  ngOnInit() {
        this.Activatedroute.paramMap.subscribe(params => { 
        this.id = params.get('id'); 
        this.DashboardService.displayDeviceDetails(this.id).subscribe(data =>{           
          this.deviceDetails = data;            
        })        
    });
    
  }  
}
