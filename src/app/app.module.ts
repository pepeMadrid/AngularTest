import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';


//componentes
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModuleModule } from './modules/materials-module/materials-module.module';
import { InicioComponent } from './components/inicio/inicio.component';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { InformesComponent } from './components/informes/informes.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    EmpleadosComponent,
    InformesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialsModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


