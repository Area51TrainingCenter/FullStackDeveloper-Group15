import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	userLogged: boolean = false

	datosRecibidos: Array<any> = []

	constructor(private auth: AuthService) {

	}

	ngOnInit() {
		this.auth.onStateChanges.subscribe(status => this.userLogged = status)
		this.userLogged = this.auth.isLoggedUser()

		const obs: Observable<any> = Observable.create(
			(observador: Observer<any>) => {

				const llamada = new XMLHttpRequest()

				llamada.onreadystatechange = function () {
					if (this.readyState == 4 && this.status == 200) {
						observador.next(JSON.parse(this.responseText))
					}
				}

				llamada.open("get", "https://jsonplaceholder.typicode.com/todos")
				llamada.send()
			}
		)

		obs.subscribe(
			(data) => { this.datosRecibidos = data },
			(error) => console.log(error),
			() => console.log("Tarea terminada")
		)





	}

	logout() {
		this.auth.logout()
		this.auth.onStateChanges.emit(false)
	}
}
