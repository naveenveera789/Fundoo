import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
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
