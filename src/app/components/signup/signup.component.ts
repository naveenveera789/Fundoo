import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
    submitted = false;
  public showPassword: boolean = false;

  constructor(private formBuilder: FormBuilder, private userService:UserService) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm: ['', Validators.required],
      service: 'advance'
  });
  }

  signup(){
    if(this.signupForm.valid){
      let reqData = {firstName:this.signupForm.value.firstname,
        lastName:this.signupForm.value.lastname,
        email:this.signupForm.value.email,
        password:this.signupForm.value.password,
        service:this.signupForm.value.service}
      console.log(this.signupForm.value);
      this.userService.signup(reqData).subscribe(response=>{console.log(response);},error=>{console.log(error);})
    }
    else{
      console.log("Form is not valid. Fill the form correctly");
      return;
    }
  }

  public checkboxPassword(): void {
    this.showPassword = !this.showPassword;
  }

}
