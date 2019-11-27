import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	private loggedUser: boolean = false

	constructor(private router: Router) { }

	login() {
		this.router.navigate(["home"])
		this.loggedUser = true
	}

	logout() {
		this.loggedUser = false
		this.router.navigate(["login"])
	}

	isLoggedUser(): boolean {
		return this.loggedUser
	}
}
