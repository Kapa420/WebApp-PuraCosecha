import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  public obtenerProducto() {

  }

  public ObtenerProductosAdmins(): Promise<any> {
    const url = `${environment.apiUrl}/obtenerProductosAdmins`;
    return this.http.get(url).toPromise();
  }

  public agregarProductosAdmins(producto: any){
    const url = `${environment.apiUrl}/agregarProductoAdmins`;
    return this.http.post(url, producto).toPromise();
  }
  public eliminarProductosAdmins(id: number): Promise<any> {
    const url = `${environment.apiUrl}/eliminarProducto/${id}`;
    return this.http.delete(url).toPromise();
  }
}
