import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from '../modelos/usuario';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	private loggedUser: boolean = false
	onStateChanges = new EventEmitter()

	constructor(private router: Router, private http: HttpClient) { }

	login(usuario: Usuario) {
		this.http.post("http://clase.tibajodemanda.com/usuario/login", usuario)
			.subscribe(
				(data: any) => {
					this.router.navigate(["home"])
					this.loggedUser = true
					sessionStorage.setItem("token", JSON.stringify(data.result.token))
					this.onStateChanges.emit("true")
				},
				error => console.log(error)
			)
	}

	logout() {
		this.loggedUser = false
		this.router.navigate(["login"])
		sessionStorage.clear()
		this.onStateChanges.emit("false")
	}

	isLoggedUser(): boolean {
		let logueado = false

		if (sessionStorage.getItem("token")) logueado = true

		return this.loggedUser || logueado
	}

	insert(usuario: Usuario): Observable<{ status: number, message: string }> {
		return this.http.post<{ status: number, message: string }>("http://clase.tibajodemanda.com/usuario", usuario)
	}

	getToken(): string {
		const token = JSON.parse(sessionStorage.getItem("token"))

		return token
	}
}
