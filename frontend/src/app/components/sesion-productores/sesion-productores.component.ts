import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoresAdminsModel } from 'src/app/models/productores-admin';

@Component({
  selector: 'app-sesion-productores',
  templateUrl: './sesion-productores.component.html',
  styleUrls: ['./sesion-productores.component.scss']
})
export class SesionProductoresComponent implements OnInit {

  public productor: ProductoresAdminsModel | null = null;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.crearProductor();
  }

  public crearProductor(){
    const datos = localStorage.getItem('user');
    this.productor = datos ? JSON.parse(datos) : null;
  }
  public CerrarSesion() {
    localStorage.clear();
    this.router.navigate(['/']);
  }

}
