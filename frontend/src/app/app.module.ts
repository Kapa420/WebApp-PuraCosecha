import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyMainpageComponent } from './components/body-mainpage/body-mainpage.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { RegistroComponent } from './components/registro/registro.component';
import { SesionClientesComponent } from './components/sesion-clientes/sesion-clientes.component';
import { SesionProductoresComponent } from './components/sesion-productores/sesion-productores.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { DatosClientesComponent } from './components/datos-clientes/datos-clientes.component';
import { ActualizarDatosComponent } from './components/actualizar-datos/actualizar-datos.component';
import { DatosProductoresComponent } from './components/datos-productores/datos-productores.component';
import { ActDatosProductoresComponent } from './components/act-datos-productores/act-datos-productores.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistroProductoresComponent } from './components/registro-productores/registro-productores.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyMainpageComponent,
    InicioSesionComponent,
    RegistroComponent,
    SesionClientesComponent,
    SesionProductoresComponent,
    NotfoundComponent,
    DatosClientesComponent,
    ActualizarDatosComponent,
    DatosProductoresComponent,
    ActDatosProductoresComponent,
    RegistroProductoresComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
