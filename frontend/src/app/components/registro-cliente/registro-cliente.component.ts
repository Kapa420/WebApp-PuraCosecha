import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.scss']
})
export class RegistroClienteComponent implements OnInit {
  public formGroup: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }
  public buildForm() {
    this.formGroup = this.formBuilder.group({
      nombre: ["", Validators.required],
      apellido: ["", Validators.required],
      email: ["", Validators.required],
      contrasena: ["", Validators.required],
      telefono: ["", Validators.required],
      direccion: ["", Validators.required],
    });
  }
  public registrar() {
    console.log(this.formGroup.value)
  }
}
