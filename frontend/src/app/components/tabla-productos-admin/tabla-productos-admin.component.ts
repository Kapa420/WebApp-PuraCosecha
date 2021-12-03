import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { ProductosService } from 'src/app/services/productos-admin/productos.service'
import { ProductoAdminsModel } from 'src/app/models/productos-admins'

@Component({
  selector: 'app-tabla-productos-admin',
  templateUrl: './tabla-productos-admin.component.html',
  styleUrls: ['./tabla-productos-admin.component.scss']
})
export class TablaProductosAdminComponent implements OnInit {

  @Output() alertData= new EventEmitter();

  public productos: ProductoAdminsModel[] = [];

  constructor(private productosservice: ProductosService) { }

  async ngOnInit(): Promise<void> {

    this.productos = await this.ObtenerProductos();
    console.log(this.productos);
  }

  private async ObtenerProductos(): Promise<any>{
    try {
      const response = await this.productosservice.ObtenerProductosAdmins();
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
  public eliminarProducto(id: number){
    this.productosservice.eliminarProductosAdmins(id).then(async response =>{
      if(response.message === 'deleted'){
        this.alertData.emit('Producto eliminado correctamente');
        this.productos = await this.ObtenerProductos();
      }
    }).catch(error => {
      console.log(error);
    })
    }
}
