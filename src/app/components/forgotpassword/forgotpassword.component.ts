import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {

  forgotpasswordForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder, private userService:UserService) { }

  ngOnInit(): void {
    this.forgotpasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  forgotpassword(){
    if(this.forgotpasswordForm.valid){
      let reqData = {
        email: this.forgotpasswordForm.value.email
      }
      console.log(this.forgotpasswordForm.value);
      this.userService.forgotpassword(reqData).subscribe(response => {console.log(response);}, error => {console.log(error);})
    }
    else{
      console.log("Form is not valid. Fill the form correctly");
      return;
    }
  }

}
