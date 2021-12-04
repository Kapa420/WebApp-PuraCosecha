import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes-admin/clientes.service';
import { ClientesAdminsModel } from 'src/app/models/clientes-admin';

@Component({
  selector: 'app-tabla-clientes-admin',
  templateUrl: './tabla-clientes-admin.component.html',
  styleUrls: ['./tabla-clientes-admin.component.scss']
})

export class TablaClientesAdminComponent implements OnInit {

  @Output() alertData= new EventEmitter();

  public showModal = false;

  public clientes: ClientesAdminsModel[] = [];


  constructor(private clientesservice: ClientesService) { }

  async ngOnInit(): Promise<void> {
    this.clientes = await this.obtenerClientes();

  }

  private async obtenerClientes(): Promise<any>{
    try {
      const response = await this.clientesservice.obtenerClientes();
      return response.data;
    }catch (error){
      console.log(error);
    }
  }

  public eliminarCliente(id: number){
    this.clientesservice.eliminarCliente(id).then(async response =>{
      if(response.message === 'deleted'){
        this.alertData.emit('Cliente eliminado correctamente');
        this.clientes = await this.obtenerClientes();
      }
    }).catch(error => {
      console.log(error);
    })
    }

  public irActualizarCliente(cliente: ClientesAdminsModel){
    localStorage.setItem('clienteActualizar', JSON.stringify(cliente));
  }
}
