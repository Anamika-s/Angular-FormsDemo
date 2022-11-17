import { NgModule } from '@angular/core';



import { AppRoutingModule, Components } from './app-routing.module';
 
import { AboutUsComponent } from './about-us/about-us.component';
import { AppComponent } from './app.component';
 
 


@NgModule({
  declarations: [
     AppComponent,
    
        
  ],
  imports: [
    
     
    AppRoutingModule
     
  ],
   
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
