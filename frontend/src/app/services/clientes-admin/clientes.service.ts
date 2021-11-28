import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  public obtenerClientes(): Promise<any> {
    const url = `${environment.apiUrl}/obtenerClientes`
    return this.http.get(url).toPromise();
  }

  public obtenerCliente(id: number) { }

  public actualizarCliente(cliente: any) {  }

  public agregarCliente(cliente: any) {  }

  public eliminarCliente(id: number): Promise<any> {
    const url = `${environment.apiUrl}/eliminarCliente/${id}`;
    return this.http.delete(url).toPromise();
  }
}
