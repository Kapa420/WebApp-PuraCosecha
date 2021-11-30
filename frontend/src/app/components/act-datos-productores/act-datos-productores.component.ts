import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-act-datos-productores',
  templateUrl: './act-datos-productores.component.html',
  styleUrls: ['./act-datos-productores.component.scss']
})
export class ActDatosProductoresComponent implements OnInit {
  public formGroup: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }
  public buildForm(){
    this.formGroup = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      poblacion: ['', Validators.required],
      direccion: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', Validators.required],
      contrasena: ['', Validators.required],
    });
  }
  public actualizarProductores(){
    console.log(this.formGroup.value)
  }
}
