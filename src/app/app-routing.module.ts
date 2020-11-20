import { Login } from './pages/login/login.component';
import { Cerca } from './pages/cerca/cerca.component';
import { Home } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'cerca', component: Cerca },
  { path: 'home', component: Home }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [Login, Cerca, Home] 