import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientesService } from 'src/app/services/clientes-admin/clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-agregar-cliente',
  templateUrl: './formulario-agregar-cliente.component.html',
  styleUrls: ['./formulario-agregar-cliente.component.scss']
})
export class FormularioAgregarClienteComponent implements OnInit {

  public formGroup: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private clienteservice: ClientesService, private router: Router) { }

  ngOnInit(): void {
    this.buildForm();
  }

  public buildForm(){
    this.formGroup = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      telefono: ['', Validators.required],
      email: ['', Validators.required],
      direccion: ['', Validators.required],
      password: ['', Validators.required]

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
}
