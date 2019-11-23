import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RegistrarComponent } from './components/registrar/registrar.component';


const routes: Routes = [
  {path: '', component:LoginComponent},
  {path: 'home', component:HomeComponent},
  {path:'registrar',component:RegistrarComponent},
  {path: '**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
