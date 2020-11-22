import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Activity1Component } from './components/activity1/activity1.component';
import { CalificacionesComponent } from './components/calificaciones/calificaciones.component';
import { HomeAppComponent } from './components/home-app/home-app.component';
import { HomeComponent } from './components/home/home.component';
import { InstructionsComponent } from './components/instructions/instructions.component';
import { LoginComponent } from './components/login/login.component';
import { ResultadosComponent } from './components/resultados/resultados.component';
import { SignupComponent } from './components/signup/signup.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { LoginTeacherComponent } from './components/login-teacher/loginT.component';

const routes: Routes = [
  { path: 'home', component: HomeAppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'activity', component: InstructionsComponent },
  { path: 'activity/1', component: Activity1Component },
  { path: 'resultados', component: ResultadosComponent },
  { path: 'teacher', component: TeacherComponent },
  { path: 'loginT', component: LoginTeacherComponent },
  { path: 'calificaciones', component: CalificacionesComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
