import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductosService } from 'src/app/services/productos-admin/productos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-formulario-agregar-producto',
  templateUrl: './formulario-agregar-producto.component.html',
  styleUrls: ['./formulario-agregar-producto.component.scss']
})
export class FormularioAgregarProductoComponent implements OnInit {

  public formGroup: FormGroup = new FormGroup({});


  constructor(private formBuilder: FormBuilder, private productosservice: ProductosService, private router: Router) { }

  ngOnInit(): void {
    this.buildForm();
  }

  public buildForm() {
    this.formGroup = this.formBuilder.group({
      nombre_producto: ['', Validators.required],
      categoria_producto: ['', Validators.required],
      precio: ['', Validators.required],
      id_productor: ['', Validators.required]
    })
  }

  public agregarProducto(){
    this.productosservice.agregarProductosAdmins(this.formGroup.value).then(response =>{
      alert("Producto agregado correctamente");
      this.router.navigate(['/admins/productos-admin']);
    }).catch(error =>{
      this.router.navigate(['/404']);
    })
  }
}
