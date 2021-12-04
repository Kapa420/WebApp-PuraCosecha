import { Component, OnInit } from '@angular/core';
import { ClientesAdminsModel } from 'src/app/models/clientes-admin';
import { Router } from '@angular/router';



@Component({
  selector: 'app-datos-clientes',
  templateUrl: './datos-clientes.component.html',
  styleUrls: ['./datos-clientes.component.scss']
})
export class DatosClientesComponent implements OnInit {

  constructor(private router: Router) { }

  public cliente: ClientesAdminsModel | null = null;


  ngOnInit(): void {
    this.crearCliente();
  }
  public crearCliente(){
    const datos = localStorage.getItem('user');
    this.cliente = datos ? JSON.parse(datos) : null;
  }

  public Cerrarsesion() {
    localStorage.clear();
    this.router.navigate(['/']);
  }

}
