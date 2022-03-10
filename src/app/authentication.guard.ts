import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthguardService } from './services/authguardService/authguard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private authguardService : AuthguardService, private router: Router) {}

  canActivate(): boolean {
    if (!this.authguardService.gettoken()) {
      this.router.navigate(["/login"]);
    }
    return this.authguardService.gettoken();
 }
  
}
