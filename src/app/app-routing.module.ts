import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},//sin path, raiz de la web redirigimos a la ruta login, definida abajo
  { path: 'login', component: LoginComponent},// /login renderizamos el componente LoginComponent
  { path: 'dashboard', loadChildren: () => import('./components/dashboard/dashboard.module').then (x => x.DashboardModule)},//importamos el modulo y despues lo renderizamos
  { path: '**', redirectTo: 'login', pathMatch: 'full'}//si no coincide el path redirigimos al login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
