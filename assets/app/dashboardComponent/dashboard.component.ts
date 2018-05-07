import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { Http, Headers, Response } from "@angular/http";
import {Observable} from 'rxjs/Rx';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { DbService } from '../Service';

@Component({
  selector: 'dashboard-comp',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
constructor(private http:Http,private router: Router,private dbService : DbService)
{

}

myForm: FormGroup;

ngOnInit()
{
  this.myForm = new FormGroup({
    source: new FormControl(null, [
        Validators.required
     ]),
    destination: new FormControl(null, Validators.required),
    tolls: new FormControl(null, Validators.required)
});
}

onSubmit()
{
console.log(this.myForm);
this.dbService.findTollTax(this.myForm.value.source,this.myForm.value.destination,this.myForm.value.tolls);

}

 
}
