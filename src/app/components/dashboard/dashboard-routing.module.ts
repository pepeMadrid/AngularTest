import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadosComponent } from '../empleados/empleados.component';
import { InformesComponent } from '../informes/informes.component';
import { InicioComponent } from '../inicio/inicio.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: '', component:DashboardComponent , children:[
    {path: '', component: InicioComponent},
    {path: 'empleados', component: EmpleadosComponent},
    {path: 'informes', component: InformesComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
