import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../../services/dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public userName:string
  public isCollapsed = false; 
  constructor(private DashboardService:DashboardService,private router:Router) { 
    this.userName = DashboardService.getUserName();
  }

  ngOnInit() {   
     
  }
  removeUser(event){
    event.preventDefault();
    this.DashboardService.logout();    
    this.router.navigate(['/']);
  }
  
}
