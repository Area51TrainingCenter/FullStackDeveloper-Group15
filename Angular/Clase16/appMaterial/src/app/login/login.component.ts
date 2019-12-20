import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	grupo: FormGroup

	constructor(private readonly authService: AuthService) {
		this.grupo = new FormGroup({
			correo: new FormControl(null, [Validators.required, Validators.email]),
			contrasena: new FormControl(null, Validators.required)
		})
	}

	login() {
		this.authService.login()
	}

	ngOnInit() {
	}

}
