import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ClientesService } from 'src/app/services/clientes-admin/clientes.service';
import { ClientesAdminsModel } from 'src/app/models/clientes-admin';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-boton-modal-agregar-cliente',
  templateUrl: './boton-modal-agregar-cliente.component.html',
  styleUrls: ['./boton-modal-agregar-cliente.component.scss']
})

export class BotonModalAgregarClienteComponent implements OnInit {

  public formGroup: FormGroup = new FormGroup({});

  public clienteActualizar: ClientesAdminsModel | null = null;

  constructor(private formBuilder: FormBuilder, private clienteservice: ClientesService, private router: Router) { }


  @Output() alertData= new EventEmitter();

  public clientes: ClientesAdminsModel[] = [];


  async ngOnInit(): Promise<void> {
    var mymodal = document.getElementById('exampleModal');
    mymodal?.addEventListener('hide.bs.modal', () =>{
      console.log("Se escondio el modal")
    })
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
