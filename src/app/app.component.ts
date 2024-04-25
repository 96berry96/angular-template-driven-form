import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-template-driven-form';

  @ViewChild('registrationForm') 
  form:NgForm;

  firstName: string = '';
  lastName: string = '';
  emailAddress: string = '';
  userName: string = '';
  dob: string = '';
  gender: string = '';
  country: string = '';
  city: string = '';
  region: string = '';
  postal: string = '';
  IsAgreed: boolean = false;

  genders= [
    { id:'check-male', value:'male', display: 'Male'},
    { id:'check-female', value:'female', display:'Female'},
    { id:'other', value:'other', display: 'Prefer not to say'}
  ]

  OnFormSubmitted(){
    this.firstName = this.form.value.firstname;
    this.lastName = this.form.value.lastname;
    this.userName = this.form.value.username;
    this.emailAddress = this.form.value.email;
    this.dob = this.form.value.dob;
    this.gender = this.form.value.gender;
    this.country = this.form.value.address.country;
    this.city = this.form.value.address.city;
    this.region = this.form.value.address.region;
    this.postal = this.form.value.address.postal;

    this.form.reset();
  }

  GenerateUsername(){
    let username = '';
    let datetime =new Date(this.dob);
    

    if(this.firstName.length >= 3){
      username += this.firstName.slice(0, 3);
    } else {
      username += this.firstName;
    }

    if(this.lastName.length >= 3){
      username += this.lastName.slice(0, 3);
    } else{
      username += this.lastName;
    }

    username += datetime.getFullYear();
    username = username.toLocaleLowerCase();

    /*this.form.setValue({
      firstname: this.form.value.firstname,
      lastname: this.form.value.lastname,
      email: this.form.value.email,
      phone: this.form.value.phone,
      dob: this.form.value.dob,
      gender: this.form.value.gender,
      username: username,
      address:{
        street1: this.form.value.address.street1,
        street2: this.form.value.address.street2,
        country: this.form.value.address.country,
        city: this.form.value.address.city,
        region: this.form.value.address.region,
        postal: this.form.value.address.postal
      }
    })*/

    this.form.form.patchValue({
      username: username
    })
    
  }
}
