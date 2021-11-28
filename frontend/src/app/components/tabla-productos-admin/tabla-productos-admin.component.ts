import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos-admin/productos.service'
import { ProductoAdminsModel } from 'src/app/models/productos-admins'

@Component({
  selector: 'app-tabla-productos-admin',
  templateUrl: './tabla-productos-admin.component.html',
  styleUrls: ['./tabla-productos-admin.component.scss']
})
export class TablaProductosAdminComponent implements OnInit {

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

}
