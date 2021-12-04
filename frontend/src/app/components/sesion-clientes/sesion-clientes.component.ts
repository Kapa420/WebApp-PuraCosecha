import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientesAdminsModel } from 'src/app/models/clientes-admin';

@Component({
  selector: 'app-sesion-clientes',
  templateUrl: './sesion-clientes.component.html',
  styleUrls: ['./sesion-clientes.component.scss']
})
export class SesionClientesComponent implements OnInit {


  public cliente: ClientesAdminsModel | null = null;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.crearCliente();
  }

  public crearCliente(){
    const datos = localStorage.getItem('user');
    this.cliente = datos ? JSON.parse(datos) : null;
  }

  public CerrarSesion() {
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
