import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	grupo: FormGroup

	constructor(private usuarioService: UsuarioService, private router: Router) {
		this.grupo = new FormGroup({
			correo: new FormControl(null, [Validators.required, Validators.email]),
			contrasena: new FormControl(null, Validators.required)
		})
	}

	ngOnInit() {
	}

	login() {
		const respuesta: boolean = this.usuarioService.login(this.grupo.getRawValue())

		if (respuesta) this.router.navigate(["/home"])
	}

}
