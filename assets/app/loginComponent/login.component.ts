import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { DbService } from '../Service';

@Component({
  selector: 'login-comp',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
constructor(private http:Http,private router: Router,private dbservice : DbService){}

myForm: FormGroup;
userStatus : boolean;

ngOnInit() {
  this.myForm = new FormGroup({
      email: new FormControl(null, [
          Validators.required
         // Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
      ]),
      password: new FormControl(null, Validators.required)
  });
}

  public onSubmit()
  {
  console.log(this.myForm);
  this.dbservice.validateUser(this.myForm.value.email,this.myForm.value.password);
  }

  logout() 
  {
    localStorage.clear();
  }

}
