import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
    submitted = false;
  public showPassword: boolean = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm: ['', Validators.required]
  });
  }

  signup(){
    if(this.signupForm.valid){
      console.log(this.signupForm.value);
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
