import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthsGuard } from './auths.guard';
import { HomeComponent } from './home/home.component';
import { LogComponent } from './log/log.component';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'log',component:LogComponent},
  {path:'home',canActivate:[AuthsGuard],component:HomeComponent},
  {path:'movie/:id',canActivate:[AuthsGuard],component:MovieComponent},
  {path:'**',canActivate:[AuthsGuard],component:LogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
