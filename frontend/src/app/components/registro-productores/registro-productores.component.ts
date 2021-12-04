import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductoresProductorService } from 'src/app/services/productores-productor/productores-productor.service'

@Component({
  selector: 'app-registro-productores',
  templateUrl: './registro-productores.component.html',
  styleUrls: ['./registro-productores.component.scss']
})
export class RegistroProductoresComponent implements OnInit {
  public formGroup: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private productorservice: ProductoresProductorService) { }

  ngOnInit(): void {
    this.buildForm();
  }
  public buildForm() {
    this.formGroup = this.formBuilder.group({
      nombre: ["", Validators.required],
      apellido: ["", Validators.required],
      telefono: ["", Validators.required],
      email: ["", Validators.required],
      direccion: ["", Validators.required],
      poblacion: ["", Validators.required],
      password: ["", Validators.required],

    });
  }
  public CrearProductor() {
    console.log(this.formGroup.value);
    this.productorservice.agregarProductor(this.formGroup.value).then(response =>{
      alert("Productor agregado correctamente");
      this.router.navigate(['/inicio-sesion']);
    }).catch(error =>{
      this.router.navigate(['/404']);
    })
  }
}
