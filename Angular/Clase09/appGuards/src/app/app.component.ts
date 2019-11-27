import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'appGuards';

	constructor(private auth: AuthService) { }

	logout() {
		this.auth.logout()
	}
}
