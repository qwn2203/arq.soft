import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Home';

  constructor(private apiservice: DataApiService) { }

  ngOnInit(): void {
    this.getMaterias();
    this.getDominio();
    this.getTutor();
  }


  getMaterias(){
    this.apiservice.getAllMateria().subscribe((res:any)=> {
      console.log(res);
    });
  }

  getDominio(){
    this.apiservice.getAllDominio().subscribe((res:any)=> {
      console.log(res);
    });
  }

  getTutor(){
    this.apiservice.getAlltutor().subscribe((res:any)=> {
      console.log(res);
    });
  }

}
