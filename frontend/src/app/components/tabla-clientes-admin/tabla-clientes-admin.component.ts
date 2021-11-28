import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes-admin/clientes.service'
import { ClientesAdminsModel } from 'src/app/models/clientes-admin'

@Component({
  selector: 'app-tabla-clientes-admin',
  templateUrl: './tabla-clientes-admin.component.html',
  styleUrls: ['./tabla-clientes-admin.component.scss']
})

export class TablaClientesAdminComponent implements OnInit {

  public clientes: ClientesAdminsModel[] = [];

  constructor(private clientesservice: ClientesService) { }

  async ngOnInit(): Promise<void> {
    this.clientes = await this.obtenerClientes();
    console.log(this.clientes);
  }

  private async obtenerClientes(): Promise<any>{
    try {
    const response = await this.clientesservice.obtenerClientes();
    return response.data;
  }catch (error){
    console.log(error);
    }
  }
}
