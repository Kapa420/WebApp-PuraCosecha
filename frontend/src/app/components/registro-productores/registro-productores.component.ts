import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-productores',
  templateUrl: './registro-productores.component.html',
  styleUrls: ['./registro-productores.component.scss']
})
export class RegistroProductoresComponent implements OnInit {
  public formGroup: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }
  public buildForm() {
    this.formGroup = this.formBuilder.group({
      nombre: ["", Validators.required],
      email: ["", Validators.required],
      telefono: ["", Validators.required],
      contrasena: ["", Validators.required],
      poblacion: ["", Validators.required],
      ciudad: ["", Validators.required],
      direccion: ["", Validators.required],

    });
  }
  public registrar() {
    console.log(this.formGroup.value)
  }
}

