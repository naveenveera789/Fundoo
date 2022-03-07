import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    submitted = false;
    user ='1';
  public showPassword: boolean = false;
  
    constructor(private formBuilder: FormBuilder, private userService:UserService, private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login(){
    if(this.loginForm.valid){
      let reqData = {email:this.loginForm.value.email,
                    password:this.loginForm.value.password}
      console.log(this.loginForm.value);
      this.userService.login(reqData).subscribe((response:any)=>{
       console.log("login",response);
       localStorage.setItem("token", response.id);
       localStorage.setItem("SessionUser", this.user);
       this.router.navigate(['/dashboard']);
      },
      error=>{console.log(error);})
    }
    else{
      console.log("Form is not valid. Fill the form correctly");
      return;
    }
  }

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }


}
