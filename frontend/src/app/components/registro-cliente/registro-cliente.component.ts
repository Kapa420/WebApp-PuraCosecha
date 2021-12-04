import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/services/clientes-cliente/cliente.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.scss']
})
export class RegistroClienteComponent implements OnInit {

  public formGroup: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private clienteservice: ClienteService) { }

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
      password: ["", Validators.required],
    });
  }
  public CrearCliente() {
    this.clienteservice.agregarCliente(this.formGroup.value).then(response =>{
      alert("Cliente agregado correctamente");
      this.router.navigate(['/inicio-sesion']);
    }).catch(error =>{
      console.log(error);
      this.router.navigate(['/404']);
    })
  }
}
