import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  resetpasswordForm: FormGroup;
    submitted = false;
 public showPassword: boolean = false;

    constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.resetpasswordForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm: ['', Validators.required]
    });
  }

  resetpassword(){
    if(this.resetpasswordForm.valid){
      console.log(this.resetpasswordForm.value);
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
