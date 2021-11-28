import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoresService {

  constructor(private http: HttpClient) { }

  public obtenerProductoresAdmins(): Promise<any> {
    const url = `${environment.apiUrl}/obtenerProductores`
    return this.http.get(url).toPromise();
  }

  
}
