import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ClientesAdminsModel } from 'src/app/models/clientes-admin';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  public obtenerClientes(): Promise<any> {
    const url = `${environment.apiUrl}/obtenerClientes`
    return this.http.get(url).toPromise();
  }


  public actualizarCliente(cliente: ClientesAdminsModel): Promise<any>{
    const url = `${environment.apiUrl}/actualizarCliente/${cliente.id_cliente}`
    return this.http.put(url, cliente).toPromise();
  }

  public agregarCliente(cliente: any) {
    const url = `${environment.apiUrl}/agregarCliente`
    return this.http.post(url, cliente).toPromise();
   }

  public eliminarCliente(id: number): Promise<any> {
    const url = `${environment.apiUrl}/eliminarCliente/${id}`;
    return this.http.delete(url).toPromise();
  }
}
