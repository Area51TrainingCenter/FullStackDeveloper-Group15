import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthenticationGuard implements CanActivate, CanActivateChild {

	constructor(private auth: AuthService) { }

	canActivate(): boolean {
		return this.auth.isLoggedUser()
	}

	canActivateChild(): boolean {
		// return this.auth.isLoggedUser()
		return this.canActivate()
	}
}