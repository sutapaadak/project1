import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class DashboardService {
  private baseUrl:string = 'http://localhost:3000';
  constructor(private http:HttpClient) { }
  getUserName() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    return currentUser.username;
  }
  logout() {
    localStorage.removeItem('currentUser');
  }
  displayDevices(){
    return this.http.get<any>('http://localhost:3000/devices');
  }
  
  displayDeviceDetails(id){
    return this.http.get(this.baseUrl + '/deviceDetails?deviceId=' + id);
  }
}
