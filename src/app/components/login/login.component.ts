import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    submitted = false;
  public showPassword: boolean = false;
  
    constructor(private formBuilder: FormBuilder, private userService:UserService) { }

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
      this.userService.login(reqData).subscribe((response:any)=>{localStorage.setItem("token", response.id); console.log("login",response);},error=>{console.log(error);})
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
