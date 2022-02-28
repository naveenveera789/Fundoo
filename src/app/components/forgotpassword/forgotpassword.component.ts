import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {

  forgotpasswordForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.forgotpasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  forgotpassword(){
    if(this.forgotpasswordForm.valid){
      console.log(this.forgotpasswordForm.value);
    }
    else{
      console.log("Form is not valid. Fill the form correctly");
      return;
    }
  }

}
