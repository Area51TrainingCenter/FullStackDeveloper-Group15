import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	userLogged: boolean = false

	constructor(private readonly authService: AuthService) {
	}

	ngOnInit() {
		this.userLogged = this.authService.isLogged()

		this.authService.onUserChangeStatus.subscribe(
			(status: boolean) => this.userLogged = status
		)
	}
}
