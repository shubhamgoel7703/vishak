import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import { LoginComponent } from "./loginComponent/login.component";
import { SignupComponent } from "./signupComponent/signup.component";
import { DashboardComponent } from "./dashboardComponent/dashboard.component";
import { VehicleInfoComponent } from "./VehicleInfoComponent/vehicleInfo.component";

import {RouterModule} from '@angular/router'; 
import {HttpModule} from '@angular/http'; 
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {DbService} from './Service';


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        SignupComponent,
		DashboardComponent,
		VehicleInfoComponent
    ],
    imports: [BrowserModule,
		RouterModule.forRoot([
		{ path: '',component:LoginComponent},
		{ path:'signup',component:SignupComponent},
		{ path:'dash',component:DashboardComponent},
		{ path:'vinfo',component:VehicleInfoComponent}
		 ]),
		 HttpModule,
		 FormsModule,	 
		 ReactiveFormsModule
			],
			providers: [DbService],
			bootstrap: [AppComponent]
})
export class AppModule {

}