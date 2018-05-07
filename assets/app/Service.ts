import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import { Router } from "@angular/router";

import { Observable } from "rxjs";
import { User } from "./User";

@Injectable()
export class DbService 
{
    user : User= new User();
    cost : string ="100";

    smsService()
    {
        console.log(this.user);

        const body ={  "cost":this.cost,"phoneNumber":this.user.phoneNo};
        const headers = new Headers({'Content-Type': 'application/json'});
        this.http.post('/smsService',body,{headers: headers}).subscribe
        (
            data => 
            {
                console.log(data.text());
                //this.cost=data.text();
              //  this.router.navigateByUrl('/');
            },
            error => {
                console.log("E"+error);
            }
        );

    }

    constructor(private http:Http,private router: Router)
    {

    }

    findTollTax(source,destination,tolls)
    {
        const body ={  "destination":destination,"tolls":tolls,"source":source};
        const headers = new Headers({'Content-Type': 'application/json'});
        this.http.post('/getTollTax',body,{headers: headers}).subscribe
        (
            data => 
            {
                console.log(data.text());
                this.cost=data.text();
                this.router.navigateByUrl('/vinfo');
            },
            error => {
                console.log("E"+error);
            }
        );
        
    }

     validateUser(name,password)
    {
        console.log(name);
        console.log(password);
        
        var postObj = { "name":name, "pass":password};
        const body = JSON.stringify(postObj);
        const headers = new Headers({'Content-Type': 'application/json'});
        
         this.http.post('/users/signin', body, {headers: headers}).subscribe
         (  
             data => 
                {    
                    console.log(data) ;       
                console.log(data.text()) ;
                this.user = new User();
                    //this.user.username = data.text().toString()[0];
                     
                    var splitted = data.text().split("\"", 14); 
                        console.log(splitted.length)

                        if(splitted.length>3)
                        {
                            this.user.username = splitted[1];
                            this.user.address = splitted[3];
                            this.user.adharNo = splitted[5];
                            this.user.drivingLNo = splitted[7];
                            this.user.state = splitted[9];
                            this.user.phoneNo = splitted[11];
                            this.user.vehicleNo = splitted[13];
                            
                            console.log(this.user);

                            this.router.navigateByUrl('/dash');
                        }

                        else{
                            this.router.navigateByUrl('/');
                        }
                },
          error => {console.log("E"+error);}
        ); 
    }


    signUpUser(form)
    {
        var postObj = form ;
        const body = JSON.stringify(postObj);
        const headers = new Headers({'Content-Type': 'application/json'});
        this.http.post('/users/signup', body,{headers: headers}).subscribe(
        data => {console.log("Success signup"); if(confirm("SignUp Successfull")) 
        {
        }},
        error =>{console.log("Invalid Signup"); if(confirm("Please restart app!")) 
        {
        }});
    }
}