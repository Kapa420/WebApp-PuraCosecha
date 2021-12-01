import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-formulario-agregar-producto',
  templateUrl: './formulario-agregar-producto.component.html',
  styleUrls: ['./formulario-agregar-producto.component.scss']
})
export class FormularioAgregarProductoComponent implements OnInit {

  public formCliente: FormGroup = new FormGroup({});


  constructor() { }

  ngOnInit(): void {
  }

}
