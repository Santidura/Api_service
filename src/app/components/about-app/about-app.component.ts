import { Component,OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/service/apiservice.service';

@Component({
  selector: 'app-about-app',
  templateUrl: './about-app.component.html',
  styleUrls: ['./about-app.component.css']
})
export class AboutAppComponent implements OnInit {
  products : any[] = []; 

 constructor(private serviceproducts : ApiserviceService){

 }
 
  ngOnInit(): void {
    this.fillproductos();
  }

  fillproductos(){
    this.serviceproducts.getapi().subscribe(data =>{
      this.products = data;
      console.log(this.products)
    })
  }

}
