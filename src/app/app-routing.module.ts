import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { LoginComponent } from './components/login/login.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent},
  {path:'resetpassword/:token',component:ResetpasswordComponent},
  {path:'dashboard', component:DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),BrowserModule,ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
