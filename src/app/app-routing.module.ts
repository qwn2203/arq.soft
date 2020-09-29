import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeAppComponent } from './components/home-app/home-app.component';
import { HomeComponent } from './components/home/home.component';
import { InstructionsComponent } from './components/instructions/instructions.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'home', component: HomeAppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'instruction', component: InstructionsComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
