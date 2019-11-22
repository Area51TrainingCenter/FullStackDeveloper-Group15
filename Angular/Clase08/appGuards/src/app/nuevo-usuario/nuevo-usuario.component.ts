import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {

  grupo: FormGroup

  constructor(private router: Router, private usuariosService: UsuariosService) {
    this.grupo = new FormGroup({
      id: new FormControl(Date.now()),
      nombre: new FormControl(null, Validators.required),
      apellido: new FormControl(null, Validators.required)
    })
  }

  grabar() {

    this.usuariosService.insertar(this.grupo.value)
    // this.router.navigate(["/usuarios"])
    this.grupo.reset()
  }

  ngOnInit() {

  }

}
