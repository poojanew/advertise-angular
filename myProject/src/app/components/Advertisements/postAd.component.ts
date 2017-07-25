import { Component } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validator, Validators } from "@angular/forms";


@Component({
  selector: 'postAd',
 templateUrl:'./postAdForm.html',
// template:`<h1>PostAd form</h1>`
})
export class postAdComponent  {

     productForm=new FormGroup({
        adTitle : new FormControl(null,[Validators.required,Validators.minLength(7),Validators.maxLength(20)]),
      userName : new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
     adDescription : new FormControl(null,[Validators.required,Validators.maxLength(70)])
    });


     options=[
        {
            name:"Furniture",
            value:'furniture'
        }, 
        {
            name:"Hardware",
            value:'hardware'
        }, 
        {
            name:"Mobile",
            value:'mobile'
        }];
  }
