import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      
    const url: string = state.url;    
    return this.checkLogin(url);
    
  }
  checkLogin(url: string) {
    if (this.authService.isLoggedIn()) {
      return true;
    }
    this.authService.redirectUrl = url;

    this.router.navigate(['/'], {queryParams: { returnUrl: url }} );
  }
}
