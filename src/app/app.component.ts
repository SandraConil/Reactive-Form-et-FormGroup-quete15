import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form_formGroup';


  constructor(public formBuilder : FormBuilder){}


  userForm = this.formBuilder.group({
   name: this.formBuilder.group({
    username : [''],
   }),
    address: this.formBuilder.group({
        street: [''],
        city: [''],
        zipCode: ['']
    }),
    credential : this.formBuilder.group({
      email : [''],
      password : [''],

    })
});

onSubmit() {
        console.log(this.userForm.value);
    }
}
