import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { DataEntryFormComponent } from './data-entry-form/data-entry-form.component';
import {ReactiveFormComponent} from  './reactive-form/reactive-form.component';
// import { ReactiveformComponent} from './reactiveform/reactiveform.component';
const routes: Routes = [
  {path:"add" , component: AddComponent},
  {path:"aboutus", component:AboutUsComponent},
  {path:"register", component:DataEntryFormComponent},
  {path:"reactiveform", component:ReactiveFormComponent}
  
];

@NgModule({
  declarations:[AddComponent, AboutUsComponent, DataEntryFormComponent,  ReactiveFormComponent
  ],
  imports: [RouterModule.forRoot(routes), FormsModule, BrowserModule,ReactiveFormsModule],
  exports: [RouterModule, FormsModule, ReactiveFormsModule , BrowserModule]
})
export class AppRoutingModule { }

export const Components =
[
  AddComponent, AboutUsComponent, DataEntryFormComponent,  ReactiveFormComponent
    
];
