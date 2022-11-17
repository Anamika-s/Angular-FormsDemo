import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  n1 : number =0;
  n2 :  number=0;
  res : number=0;
  constructor() { }

  ngOnInit(): void {
  }
 Add(ngForm: any)
 {
  console.log(ngForm)
   console.log(ngForm.controls.txtNo1.value) 
  this.n1 =  ngForm.controls.txtNo1.value;
  this.n2 =  ngForm.controls.txtNo2.value;
  this.res = this.n1 + this.n2;
//   console.log(this.n1)
//   console.log(this.n2)
// console.log(this.res);
}
}
