import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductoresAdminsModel } from 'src/app/models/productores-admin'
import { ProductoresProductorService } from 'src/app/services/productores-productor/productores-productor.service'

@Component({
  selector: 'app-act-datos-productores',
  templateUrl: './act-datos-productores.component.html',
  styleUrls: ['./act-datos-productores.component.scss']
})
export class ActDatosProductoresComponent implements OnInit {

  public formGroup: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private productorservice: ProductoresProductorService) { }

  public productor: ProductoresAdminsModel | null = null;

  public productorActualizar: ProductoresAdminsModel | null = null;

  ngOnInit(): void {
    this.buildForm();
    this.crearProductor();
  }
  public buildForm(){
    const actualizar = localStorage.getItem('user');
    this.productorActualizar = actualizar ? JSON.parse(actualizar) : null;
    this.formGroup = this.formBuilder.group({
      nombre: [this.productorActualizar?.nombre, Validators.required],
      apellido: [this.productorActualizar?.apellido, Validators.required],
      poblacion: [this.productorActualizar?.poblacion, Validators.required],
      direccion: [this.productorActualizar?.direccion, Validators.required],
      telefono: [this.productorActualizar?.telefono, Validators.required],
      email: [this.productorActualizar?.email, Validators.required],
      password: [this.productorActualizar?.password, Validators.required],
    });
  }
  public actualizarProductores(){
    const productor: ProductoresAdminsModel = {id_productor: this.productor?.id_productor, ...this.formGroup.value};
    this.productorservice.actualizarProductor(productor).then(response =>{
      if (response.message === 'updated'){
        localStorage.clear();
        localStorage.setItem('user', JSON.stringify(productor));
      }
    }).catch(error =>{
      this.router.navigate(['/404']);
    })
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
