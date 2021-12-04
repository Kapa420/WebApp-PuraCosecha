import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ProductoresAdminsModel } from 'src/app/models/productores-admin'

@Injectable({
  providedIn: 'root'
})
export class ProductoresProductorService {

  constructor(private http: HttpClient) { }

  public obtenerProductorId(id: number){
    const url = `${environment.apiUrl}/obtenerProductorId/${id}`
    return this.http.get(url).toPromise();
  }

  public InicioSesion(datos: any): Promise<any> {
    const url = `${environment.apiUrl}/iniciarSesionProductor`;
    return this.http.post(url, datos).toPromise();

  }

  public eliminarProductor(id: number): Promise<any> {
    const url = `${environment.apiUrl}/eliminarProductores/${id}`;
    return this.http.delete(url).toPromise();
  }

  public actualizarProductor(productor: ProductoresAdminsModel): Promise<any>{
    const url = `${environment.apiUrl}/actualizarProductor/${productor.id_productor}`
    return this.http.put(url, productor).toPromise();
  }

  public obtenerProductoresEmail(email: string): Promise<any>{
    const url = `${environment.apiUrl}/obtenerProductoresEmail/${email}`;
    return this.http.get(url).toPromise();
  }
  public agregarProductor(productor: any) {
    const url = `${environment.apiUrl}/agregarProductor`
    return this.http.post(url, productor).toPromise();
   }
}
