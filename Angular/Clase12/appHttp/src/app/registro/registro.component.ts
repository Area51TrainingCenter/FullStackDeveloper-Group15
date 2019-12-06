import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Usuario } from '../modelos/usuario';
import { AuthService } from '../services/auth.service';

@Component({
	selector: 'app-registro',
	templateUrl: './registro.component.html',
	styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

	grupo: FormGroup

	constructor(private auth: AuthService, private router: Router) {
		this.grupo = new FormGroup({
			nombre: new FormControl(null, Validators.required),
			correo: new FormControl(null, [Validators.required, Validators.email]),
			contrasena: new FormControl(null, Validators.required)
		})
	}

	registro() {
		const usuario: Usuario = this.grupo.getRawValue()

		this.auth.insert(usuario)
			.subscribe(
				data => this.router.navigate(["login"]),
				error => console.log(error)
			)
	}

	ngOnInit() {
	}

}
