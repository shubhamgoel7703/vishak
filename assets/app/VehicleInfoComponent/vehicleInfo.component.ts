import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { Http, Headers, Response } from "@angular/http";
import {Observable} from 'rxjs/Rx';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { DbService } from '../Service';

@Component({
  selector: 'vehicleInfo-comp',
  templateUrl: './vehicleInfo.component.html',
  styleUrls: ['./vehicleInfo.component.css']
})
export class VehicleInfoComponent {

myForm: FormGroup;

constructor(private http:Http,private router: Router,private dbService : DbService)
{

}


ngOnInit() {
  this.myForm = new FormGroup({
    vehicleNo: new FormControl(null, [
          Validators.required
              ]),
              username: new FormControl(null, Validators.required),
              address: new FormControl(null, Validators.required),
              adharNo: new FormControl(null, Validators.required),
              drivingLNo: new FormControl(null, Validators.required),
              state: new FormControl(null, Validators.required),
              phoneNo: new FormControl(null, Validators.required),
              
      fee: new FormControl(null, Validators.required)
  });

  this.myForm.setValue({"fee":this.dbService.cost+"₹","vehicleNo":this.dbService.user.vehicleNo,
  "username":this.dbService.user.username
  ,"adharNo":this.dbService.user.adharNo,"drivingLNo":this.dbService.user.drivingLNo,
  "state":this.dbService.user.state,"phoneNo":this.dbService.user.phoneNo
  ,"address":this.dbService.user.address
  });
}

onSubmit()
{
  if(confirm("ThankYou For Booking! You will recieve the details on your registered phone number")) 
    {
      this.dbService.smsService();
      this.router.navigateByUrl('/');
    }
}


 
}
