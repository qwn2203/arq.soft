import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataApiService } from 'src/app/services/data-api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  forma: FormGroup;
  constructor(private fb: FormBuilder,private apiservice: DataApiService, private router: Router) { }

  ngOnInit(): void {
    this.forma = this.fb.group({
      name: ['',Validators.required, ],
      lastname: ['',Validators.required, ],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      password: ['',Validators.required, ],
    })
  }

  guardar(){
    
  }

}
