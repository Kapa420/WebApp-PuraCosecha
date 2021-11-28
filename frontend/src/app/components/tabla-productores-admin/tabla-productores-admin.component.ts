import { Component, OnInit } from '@angular/core'
import { ProductoresService } from 'src/app/services/productores-admin/productores.service'
import { ProductoresAdminsModel } from 'src/app/models/productores-admin'

@Component({
  selector: 'app-tabla-productores-admin',
  templateUrl: './tabla-productores-admin.component.html',
  styleUrls: ['./tabla-productores-admin.component.scss']
})
export class TablaProductoresAdminComponent implements OnInit {

  public productores: ProductoresAdminsModel[] = [];

  constructor(private productoresService: ProductoresService) { }

  async ngOnInit(): Promise<void> {
    this.productores = await this.obtenerProductores();
    console.log(this.productores);
  }

  public async obtenerProductores(){
    try {
      const response = await this.productoresService.obtenerProductoresAdmins();
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

}
