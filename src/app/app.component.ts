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

  genders= [
    { id:'check-male', value:'male', display: 'Male'},
    { id:'check-female', value:'female', display:'Female'},
    { id:'other', value:'other', display: 'Prefer not to say'}
  ]

  OnFormSubmitted(){
    console.log(this.form);
    
    console.log(this.form.value);
    
    
  }
}
