import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActDatosProductoresComponent } from './components/act-datos-productores/act-datos-productores.component';
import { ActualizarDatosComponent } from './components/actualizar-datos/actualizar-datos.component';
import { BodyMainpageComponent } from './components/body-mainpage/body-mainpage.component';
import { DatosClientesComponent } from './components/datos-clientes/datos-clientes.component';
import { DatosProductoresComponent } from './components/datos-productores/datos-productores.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AdministradoresMainpageComponent } from './components/administradores-mainpage/administradores-mainpage.component';
import { SesionClientesComponent } from './components/sesion-clientes/sesion-clientes.component';
import { SesionProductoresComponent } from './components/sesion-productores/sesion-productores.component';
import { BotonModalAgregarProductorComponent } from './components/boton-modal-agregar-productor/boton-modal-agregar-productor.component';
import { TablaClientesAdminComponent } from './components/tabla-clientes-admin/tabla-clientes-admin.component';
import { TablaProductoresAdminComponent } from './components/tabla-productores-admin/tabla-productores-admin.component';
import { TablaProductosAdminComponent } from './components/tabla-productos-admin/tabla-productos-admin.component';
import { RegistroClienteComponent } from './components/registro-cliente/registro-cliente.component';
import { RegistroProductoresComponent } from './components/registro-productores/registro-productores.component';

const routes: Routes = [
  {path: 'inicio-sesion', component: InicioSesionComponent},
  {path: 'admins', component: AdministradoresMainpageComponent},
  {path: 'registroProductores', component: RegistroProductoresComponent},
  {path: 'sesionCliente', component: SesionClientesComponent},
  {path: 'sesionProductor', component: SesionProductoresComponent},
  {path: '', component: BodyMainpageComponent},
  {path: '404', component: NotfoundComponent},
  {path: 'admins/cliente-admin', component: TablaClientesAdminComponent},
  {path: 'datosClientes', component:DatosClientesComponent},
  {path: 'datosProductores', component:DatosProductoresComponent},
  {path: 'actualizarDatos', component:ActualizarDatosComponent},
  {path: 'actualizarDatosProductores', component:ActDatosProductoresComponent},
  {path: '404', component: NotfoundComponent},
  {path: 'admins/productos-admin', component: TablaProductosAdminComponent},
  {path: 'admins/productores-admin', component: TablaProductoresAdminComponent},
  {path: 'registro', component: RegistroClienteComponent},
  {path: 'registro-productores', component: RegistroProductoresComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
