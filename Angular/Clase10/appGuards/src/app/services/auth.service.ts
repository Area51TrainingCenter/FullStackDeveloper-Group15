import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	private loggedUser: boolean = false
	onStateChanges = new EventEmitter()

	constructor(private router: Router) { }

	login() {
		this.router.navigate(["home"])
		this.loggedUser = true
		sessionStorage.setItem("loggedUser", "1")
		this.onStateChanges.emit("true")
	}

	logout() {
		this.loggedUser = false
		this.router.navigate(["login"])
		sessionStorage.clear()
		this.onStateChanges.emit("false")
	}

	isLoggedUser(): boolean {
		let logueado = false

		if (sessionStorage.getItem("loggedUser")) logueado = true

		return this.loggedUser || logueado
	}
}
