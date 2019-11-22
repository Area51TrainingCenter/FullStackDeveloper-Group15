import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit {

  listaUsuarios: Array<any> = []

  constructor(private router: Router, private usuariosService: UsuariosService) { }

  ngOnInit() {
    this.listaUsuarios = this.usuariosService.listar()
  }

  nuevo() {
    this.router.navigate(["/usuarios", "nuevo"])
  }

  edicion(id: number) {
    this.router.navigate(["/usuarios", "edicion", id])
  }

}
