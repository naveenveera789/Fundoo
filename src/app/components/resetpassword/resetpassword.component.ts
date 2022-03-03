import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  resetpasswordForm: FormGroup;
    submitted = false;
 public showPassword: boolean = false;
 token:any;

    constructor(private formBuilder: FormBuilder, private userService:UserService, private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.token = this. activeRoute.snapshot.paramMap.get('token');
    this.resetpasswordForm = this.formBuilder.group({
      nPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirm: ['', Validators.required]
    });
  }

  resetpassword(){
    if(this.resetpasswordForm.valid){
      let reqData = {
        newPassword:this.resetpasswordForm.value.nPassword
      }
      console.log(this.resetpasswordForm.value);
      this.userService.resetpassword(reqData,this.token).subscribe((response:any)=>{console.log("reset called",response);},error=>{console.log(error);})
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
