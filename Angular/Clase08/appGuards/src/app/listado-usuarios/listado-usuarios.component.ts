import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  nuevo() {
    this.router.navigate(["/usuarios", "nuevo"])
  }

  edicion() {
    this.router.navigate(["/usuarios", "edicion"])
  }

}
