import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductoresService } from 'src/app/services/productores-admin/productores.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-formulario-agregar-productor',
  templateUrl: './formulario-agregar-productor.component.html',
  styleUrls: ['./formulario-agregar-productor.component.scss']
})
export class FormularioAgregarProductorComponent implements OnInit {

  public formGroup: FormGroup = new FormGroup({});


  constructor(private formBuilder: FormBuilder, private productoresservice: ProductoresService, private router: Router) { }

  ngOnInit(): void {
    this.buildForm();
    }

  public buildForm(){
    this.formGroup = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', Validators.required],
      direccion: ['', Validators.required],
      poblacion: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public agregarProductor(){
    this.productoresservice.agregarProductor(this.formGroup.value).then(response =>{
      alert("Productor agregado correctamente");
      this.router.navigate(['/admins/productores-admin']);
    }).catch(error =>{
      this.router.navigate(['/404']);
    })
  }

}
