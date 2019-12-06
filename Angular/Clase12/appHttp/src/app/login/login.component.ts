import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../modelos/usuario';
import { AuthService } from '../services/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	grupo: FormGroup

	constructor(private auth: AuthService) {
		this.grupo = new FormGroup({
			correo: new FormControl(null, [Validators.required, Validators.email]
			),
			contrasena: new FormControl(null, Validators.required)
		})
	}

	ngOnInit() {
	}

	login() {
		const usuario: Usuario = this.grupo.value
		this.auth.login(usuario)
	}

}
