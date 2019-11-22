import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-edicion-usuario',
  templateUrl: './edicion-usuario.component.html',
  styleUrls: ['./edicion-usuario.component.css']
})
export class EdicionUsuarioComponent implements OnInit {

  grupo: FormGroup

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private usuariosService: UsuariosService) {
    this.grupo = new FormGroup({
      id: new FormControl(),
      nombre: new FormControl(null, Validators.required),
      apellido: new FormControl(null, Validators.required)
    })
  }

  grabar() {

  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((respuesta: any) => {
      const id = respuesta.params.id

      const usuario = this.usuariosService.editar(id)
      if (usuario) this.grupo.setValue(usuario)
    })


  }

}
