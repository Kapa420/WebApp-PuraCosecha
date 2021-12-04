import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/clientes-cliente/cliente.service';
import { ProductoresProductorService } from 'src/app/services/productores-productor/productores-productor.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss']
})
export class InicioSesionComponent implements OnInit {

  public formGroup: FormGroup = new FormGroup({});


  constructor(private formBuilder: FormBuilder,
              private clienteservice: ClienteService,
              private productorservice: ProductoresProductorService,
              private router: Router) { }

  ngOnInit(): void {
    this.buildForm();
  }

  public buildForm(){
    this.formGroup = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  public inicioSesionCliente(){
    this.clienteservice.InicioSesion(this.formGroup.value).then(response => {
      if(response.statuscode === 0){
        alert("No existe el usuario");
      }else if(response.status === 1){
        alert("Contraseña incorrecta");
      }else if(response.statuscode === 2){
        localStorage.setItem('user', JSON.stringify(response.user));
        this.router.navigate(['/sesionCliente']);
      }
    }).catch(error => {
      alert(error);
    })
  }
  public inicioSesionProductor() {
    this.productorservice.InicioSesion(this.formGroup.value).then(response => {
      if(response.statuscode === 0){
        alert("No existe el usuario");
      }else if(response.status === 1){
        alert("Contraseña incorrecta");
      }else if(response.statuscode === 2){
        localStorage.setItem('user', JSON.stringify(response.user));
        this.router.navigate(['/sesionProductor']);
      }
    }).catch(error => {
      alert(error);
    })
  }
}
