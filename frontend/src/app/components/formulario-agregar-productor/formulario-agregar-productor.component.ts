import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-formulario-agregar-productor',
  templateUrl: './formulario-agregar-productor.component.html',
  styleUrls: ['./formulario-agregar-productor.component.scss']
})
export class FormularioAgregarProductorComponent implements OnInit {

  public formCliente: FormGroup = new FormGroup({});
  

  constructor() { }

  ngOnInit(): void {
  }

}
