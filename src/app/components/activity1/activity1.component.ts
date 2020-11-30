import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataApiService } from 'src/app/services/data-api.service';

@Component({
  selector: 'app-activity1',
  templateUrl: './activity1.component.html',
  styleUrls: ['./activity1.component.css']
})
export class Activity1Component implements OnInit {
  forma: FormGroup;
  descripcionPreguntas: string[] = [];
  pregPreguntas: string[] = [];
  resPreguntas: string[] = [];

  constructor(private fb: FormBuilder,private apiservice: DataApiService, private router: Router) { 
    this.preguntas();
  }

  ngOnInit(): void {
    this.getCuestionario()
  }

  preguntas(){
    this.forma = this.fb.group({
      q1: ['',, ],
      q2: ['',, ],
      q3: ['', []],
      q4t: ['',, ],
      q4f: ['',, ],
    })
  }

  guardar(){
    console.log(this.forma);
  }

  getCuestionario(){
    this.apiservice.getAllCuestionario().subscribe((res:any)=> {
      var cuestionario = []
      for(var i = 0; i < res.problema.length; i++){
        var preguntaObject = {descripcion:res.problema[i].descripcion, preguntas:res.problema[i].preguntas, respuestas:res.problema[i].respuestas};
        this.descripcionPreguntas.push(res.problema[i].descripcion);
        this.pregPreguntas.push(res.problema[i].preguntas);
        this.resPreguntas.push(res.problema[i].respuestas);
      }
      console.log(this.descripcionPreguntas);
      console.log(this.pregPreguntas);
      console.log(this.resPreguntas);
    });
  }
}
