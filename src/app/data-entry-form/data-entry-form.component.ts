import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-entry-form',
  templateUrl: './data-entry-form.component.html',
  styleUrls: ['./data-entry-form.component.css']
})
export class DataEntryFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  RegisterUser(regForm : any)
  {
    console.log(regForm.controls);
    console.log(regForm.controls.firstName.value)
    
  }
}
