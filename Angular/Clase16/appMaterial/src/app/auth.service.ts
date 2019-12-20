import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	onUserChangeStatus: Subject<boolean> = new Subject<boolean>()

	userLogged: boolean = false

	constructor(private readonly router: Router) { }

	login() {
		this.onUserChangeStatus.next(true)
		sessionStorage.setItem("user", "user logged")
		this.userLogged = true
		this.router.navigate(["/home"])
	}

	logout() {
		this.onUserChangeStatus.next(false)
		sessionStorage.clear()
		this.userLogged = false
		this.router.navigate(["/"])
	}

	isLogged(): boolean {
		if (this.userLogged || sessionStorage.getItem("user")) {
			return true
		}
		return false
	}
}
