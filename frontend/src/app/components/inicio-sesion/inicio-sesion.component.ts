import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss']
})
export class InicioSesionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  validarUsuario(){
    localStorage.setItem("nombre", "dana")
    this.router.navigate(["/sesionCliente"])
  }
}
