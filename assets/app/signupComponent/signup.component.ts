import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { Router } from "@angular/router";
import { Http, Headers, Response } from "@angular/http";
import { DbService } from '../Service';

@Component({
  selector: 'signup-comp',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent 
{
  constructor(private http:Http,private router: Router,private dbservice : DbService){}
  
  myForm: FormGroup;

ngOnInit() {
  this.myForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    address: new FormControl(null, Validators.required),
    aadhar: new FormControl(null, Validators.required),
    dlNo: new FormControl(null, Validators.required),
    state: new FormControl(null, Validators.required),
    phoneNo: new FormControl(null, Validators.required),
    VehicleNo: new FormControl(null, Validators.required)

  });
}

onSubmit()
{
  console.log(this.myForm.value);
  console.log("Posting req");
  //this.dbservice.smsService(this.myForm.value);

  this.myForm.reset;
  //this.router.navigateByUrl('/');
}

}
