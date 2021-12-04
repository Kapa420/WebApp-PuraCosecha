import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientesService } from 'src/app/services/clientes-admin/clientes.service';
import { Router } from '@angular/router';
import { ClientesAdminsModel } from 'src/app/models/clientes-admin';

@Component({
  selector: 'app-formulario-agregar-cliente',
  templateUrl: './formulario-agregar-cliente.component.html',
  styleUrls: ['./formulario-agregar-cliente.component.scss']
})
export class FormularioAgregarClienteComponent implements OnInit {

  @Input() cliente: ClientesAdminsModel | null = null;

  public formGroup: FormGroup = new FormGroup({});

  public clienteActualizar: ClientesAdminsModel | null = null;

  constructor(private formBuilder: FormBuilder,
              private clienteservice: ClientesService,
              private router: Router) { }

  ngOnInit(): void {
    this.buildForm();
    console.log(this.cliente);
  }

  public buildForm(){
    const actualizar = localStorage.getItem('clienteActualizar');
    console.log(actualizar);
    this.clienteActualizar = actualizar ? JSON.parse(actualizar) : null;
    this.formGroup = this.formBuilder.group({
      nombre: [this.clienteActualizar?.nombre , Validators.required],
      apellido: [this.clienteActualizar?.apellido, Validators.required],
      telefono: [this.clienteActualizar?.telefono, Validators.required],
      email: [this.clienteActualizar?.email, Validators.required],
      direccion: [this.clienteActualizar?.direccion, Validators.required],
      password: [this.clienteActualizar?.password, Validators.required]

    });
  }

  public agregarCliente(){
    this.clienteservice.agregarCliente(this.formGroup.value).then(response =>{
      alert("Cliente agregado correctamente");
      this.router.navigate(['/admins/cliente-admin']);
    }).catch(error =>{
      this.router.navigate(['/404']);
    })
  }

  public actualizarCliente(){
    console.log(this.formGroup.value);
    const cliente: ClientesAdminsModel = {id_cliente: this.clienteActualizar?.id_cliente, ...this.formGroup.value};
    this.clienteservice.actualizarCliente(cliente).then(response =>{
      if (response.message === 'updated'){
        localStorage.clear();
        alert('Cliente actualizado correctamente')
      }
    }).catch(error =>{
      this.router.navigate(['/404']);
    })
  }
}
