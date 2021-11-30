import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private htpp: HttpClient) { }

  public obtenerInformacion(){}
  public obtenerDatos(){}
  public agregarDatos(){}
  public actualizarDatos(){}
}
