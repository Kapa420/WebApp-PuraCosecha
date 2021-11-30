import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActDatosProductoresComponent } from './components/act-datos-productores/act-datos-productores.component';
import { ActualizarDatosComponent } from './components/actualizar-datos/actualizar-datos.component';
import { BodyMainpageComponent } from './components/body-mainpage/body-mainpage.component';
import { DatosClientesComponent } from './components/datos-clientes/datos-clientes.component';
import { DatosProductoresComponent } from './components/datos-productores/datos-productores.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AdministradoresMainpageComponent } from './components/administradores-mainpage/administradores-mainpage.component';
import { BotonModalAgregarClienteComponent } from './components/boton-modal-agregar-cliente/boton-modal-agregar-cliente.component';
import { SesionClientesComponent } from './components/sesion-clientes/sesion-clientes.component';
import { SesionProductoresComponent } from './components/sesion-productores/sesion-productores.component';

const routes: Routes = [
  {path: 'inicio-sesion', component: InicioSesionComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'admins', component: AdministradoresMainpageComponent},
  {path: 'shido', component: BotonModalAgregarClienteComponent},
  {path: 'sesionCliente', component: SesionClientesComponent},
  {path: 'sesionProductor', component: SesionProductoresComponent},
  {path: '', component: BodyMainpageComponent},
  {path: 'datosClientes', component:DatosClientesComponent},
  {path: 'datosProductores', component:DatosProductoresComponent},
  {path: 'actualizarDatos', component:ActualizarDatosComponent},
  {path: 'actualizarDatosProductores', component:ActDatosProductoresComponent},
  {path: '404', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
