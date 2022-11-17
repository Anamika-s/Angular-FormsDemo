import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})

export class ReactiveFormComponent implements OnInit {

  signUpForm :  FormGroup;
  FirstName : string="";
  LastName : string="";
  Email : string ="";
  Password : string ="";

  submitted = false;
  constructor(private  fb : FormBuilder)
  {
     this.signUpForm = fb.group({
      FirstName : new FormControl('', [Validators.required, Validators.minLength(10)]),
      LastName : new FormControl('', [Validators.required]),
        Email : new FormControl(''),
        Password : new FormControl('')
         
   });
  }


   SubmitData(signUpForm: any)
   {
    this.submitted = true;

    if (this.signUpForm.invalid) {
      return;
    }
    else
    {
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.signUpForm.value));
    console.log("submitted");
    console.log(signUpForm.controls.FirstName.value);

    var user = JSON.stringify(this.signUpForm.value);

    
   }

   }

  ngOnInit(): void {
  }

}
