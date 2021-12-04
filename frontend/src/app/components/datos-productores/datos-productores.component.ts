import { Component, OnInit } from '@angular/core';
import { ProductoresAdminsModel } from 'src/app/models/productores-admin'
import { Router } from '@angular/router';

@Component({
  selector: 'app-datos-productores',
  templateUrl: './datos-productores.component.html',
  styleUrls: ['./datos-productores.component.scss']
})
export class DatosProductoresComponent implements OnInit {

  constructor(private router: Router) { }

  public productor: ProductoresAdminsModel | null = null;


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
