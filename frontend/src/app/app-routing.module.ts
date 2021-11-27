import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyMainpageComponent } from './components/body-mainpage/body-mainpage.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RegistroComponent } from './components/registro/registro.component';
import { SesionClientesComponent } from './components/sesion-clientes/sesion-clientes.component';

const routes: Routes = [
  {path: 'inicio-sesion', component: InicioSesionComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'sesionCliente', component: SesionClientesComponent},
  {path: '', component: BodyMainpageComponent},
  {path: '404', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
