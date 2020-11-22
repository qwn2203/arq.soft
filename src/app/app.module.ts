import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { InstructionsComponent } from './components/instructions/instructions.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeAppComponent } from './components/home-app/home-app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Activity1Component } from './components/activity1/activity1.component';
import { ResultadosComponent } from './components/resultados/resultados.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { CalificacionesComponent } from './components/calificaciones/calificaciones.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginTeacherComponent } from './components/login-teacher/loginT.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    InstructionsComponent,
    NavbarComponent,
    HomeAppComponent,
    Activity1Component,
    ResultadosComponent,
    TeacherComponent,
    CalificacionesComponent,
    LoginTeacherComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
