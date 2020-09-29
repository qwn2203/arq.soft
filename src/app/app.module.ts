import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { InstructionsComponent } from './instructions/instructions.component';


const appRoutes: Routes = [
      {path: 'home', component: HomeComponent},
      {path: 'login', component: LoginComponent},
      {path: 'instruction', component: InstructionsComponent},
      { path: '',   redirectTo: '/home', pathMatch: 'full' },
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    InstructionsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
