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
  constructor(private fb: FormBuilder,private apiservice: DataApiService, private router: Router) { 
    this.preguntas();
  }

  ngOnInit(): void {
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
}
