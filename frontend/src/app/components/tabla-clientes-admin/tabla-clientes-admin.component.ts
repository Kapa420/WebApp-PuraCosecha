import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes-admin/clientes.service'

@Component({
  selector: 'app-tabla-clientes-admin',
  templateUrl: './tabla-clientes-admin.component.html',
  styleUrls: ['./tabla-clientes-admin.component.scss']
})
export class TablaClientesAdminComponent implements OnInit {

  constructor(private clientesservice: ClientesService) { }

  ngOnInit(): void {
    this.obtenerClientes();
  }

  private async obtenerClientes(){
    try {
    const response = await this.clientesservice.obtenerClientes();
    console.log(response)
  }catch (error){
    console.log(error);
    }
  }
}
