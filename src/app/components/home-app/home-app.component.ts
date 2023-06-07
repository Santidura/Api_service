import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/service/apiservice.service';

@Component({
  selector: 'app-home-app',
  templateUrl: './home-app.component.html',
  styleUrls: ['./home-app.component.css']
})
export class HomeAppComponent implements OnInit {

  data: any[] =[]

  constructor(private apijsonplaceholder : ApiserviceService){

  }
  ngOnInit(): void {
    this.filldata();
  }

  filldata(){
    this.apijsonplaceholder.getapi().subscribe(data =>{
      this.data = data;
      console.log(this.data);
    })
  }

}
