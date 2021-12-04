import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ClientesAdminsModel } from 'src/app/models/clientes-admin';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  public obtenerClienteId(id: number){
    const url = `${environment.apiUrl}/obtenerClienteId/${id}`
    return this.http.get(url).toPromise();
  }

  public InicioSesion(datos: any): Promise<any> {
    const url = `${environment.apiUrl}/iniciarSesionCliente`;
    return this.http.post(url, datos).toPromise();

  }

  public eliminarCliente(id: number): Promise<any> {
    const url = `${environment.apiUrl}/eliminarCliente/${id}`;
    return this.http.delete(url).toPromise();
  }

  public actualizarCliente(cliente: ClientesAdminsModel): Promise<any>{
    const url = `${environment.apiUrl}/actualizarCliente/${cliente.id_cliente}`
    return this.http.put(url, cliente).toPromise();
  }

  public obtenerClienteEmail(email: string): Promise<any>{
    const url = `${environment.apiUrl}/obtenerClienteEmail/${email}`;
    return this.http.get(url).toPromise();
  }

  public agregarCliente(cliente: any) {
    const url = `${environment.apiUrl}/agregarCliente`
    return this.http.post(url, cliente).toPromise();
   }
}
