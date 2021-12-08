import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mapa';

   
   Sillas:any[]=[];

   
  constructor(){
    
        for (let i=0; i <50; i++)
    {
      this.Sillas[i]= i+1;
     
    }
    
  }


}
