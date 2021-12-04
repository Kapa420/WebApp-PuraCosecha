import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientesAdminsModel } from 'src/app/models/clientes-admin';
import { ClienteService } from 'src/app/services/clientes-cliente/cliente.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-actualizar-datos',
  templateUrl: './actualizar-datos.component.html',
  styleUrls: ['./actualizar-datos.component.scss']
})
export class ActualizarDatosComponent implements OnInit {

  public cliente: ClientesAdminsModel | null = null;

  public clienteActualizar: ClientesAdminsModel | null = null;


  public formGroup: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private clienteservice: ClienteService) { }

  ngOnInit(): void {
    this.buildForm();
    this.crearCliente();
  }
  public buildForm(){
    const actualizar = localStorage.getItem('user');
    this.clienteActualizar = actualizar ? JSON.parse(actualizar) : null;
    this.formGroup = this.formBuilder.group({
      nombre: [this.clienteActualizar?.nombre, Validators.required],
      apellido: [this.clienteActualizar?.apellido, Validators.required],
      direccion: [this.clienteActualizar?.direccion, Validators.required],
      telefono: [this.clienteActualizar?.telefono, Validators.required],
      email: [this.clienteActualizar?.email, Validators.required],
      password: [this.clienteActualizar?.password, Validators.required],
    });
  }
  public actualizarClientes(){
    const cliente: ClientesAdminsModel = {id_cliente: this.cliente?.id_cliente, ...this.formGroup.value};
    this.clienteservice.actualizarCliente(cliente).then(response =>{
      if (response.message === 'updated'){
        localStorage.clear();
        localStorage.setItem('user', JSON.stringify(cliente));
      }
    }).catch(error =>{
      this.router.navigate(['/404']);
    })
  }
  public crearCliente(){
    const datos = localStorage.getItem('user');
    this.cliente = datos ? JSON.parse(datos) : null;
  }
  public CerrarSesion() {
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
