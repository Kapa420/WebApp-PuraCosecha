import { Component, OnInit } from '@angular/core';
/*import { UsuarioService } from 'src/app/services/usuario.service';*/

@Component({
  selector: 'app-sesion-clientes',
  templateUrl: './sesion-clientes.component.html',
  styleUrls: ['./sesion-clientes.component.scss']
})
export class SesionClientesComponent implements OnInit {
public nombre: String | null="María"
  constructor() { }

  ngOnInit(): void {
  /*  this.nombre=localStorage.getItem("nombre")*/
  }

}
