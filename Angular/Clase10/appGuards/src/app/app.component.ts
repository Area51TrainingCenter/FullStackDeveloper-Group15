import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	userLogged: boolean = false

	constructor(private auth: AuthService) {

	}

	ngOnInit() {
		this.auth.onStateChanges.subscribe(status => this.userLogged = status)
		this.userLogged = this.auth.isLoggedUser()

	}

	logout() {
		this.auth.logout()
		this.auth.onStateChanges.emit(false)
	}
}
