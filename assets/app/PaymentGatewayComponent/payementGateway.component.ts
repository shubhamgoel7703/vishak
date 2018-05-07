import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { Http, Headers, Response } from "@angular/http";
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'vehicleInfo-comp',
  templateUrl: './vehicleInfo.component.html',
  styleUrls: ['./vehicleInfo.component.css']
})
export class VehicleInfoComponent {
constructor(private http:Http,private router: Router,private dbservice : DbService)
{

}
myForm: FormGroup;

ngOnInit()
{
	this.myForm = new FormGroup({
    vehicleNo: new FormControl(),
    price: new FormControl(),
    });
}

onSubmit()
{
	console.log(this.myForm.vehicleNo);
	console.log(this.myForm.price);
}

 
}
