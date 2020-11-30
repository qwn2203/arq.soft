import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {
  temaResult = '';

  constructor(private apiservice: DataApiService) { }

  ngOnInit(): void {
    this.getTema();
  }

  getTema(){
    this.apiservice.getAllTema().subscribe((res:any)=> {
      this.temaResult = res.tema[0].nombre;
      console.log(res);
    });
  }

}
