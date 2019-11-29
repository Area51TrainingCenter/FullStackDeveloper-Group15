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

	constructor(private auth: AuthService) {

	}

	ngOnInit() {
		this.auth.onStateChanges.subscribe(status => this.userLogged = status)
		this.userLogged = this.auth.isLoggedUser()

		const promesa = new Promise((resolve, reject) => {
			const llamada = new XMLHttpRequest()

			llamada.onreadystatechange = function () {
				if (this.readyState == 4 && this.status == 200) {
					resolve(this.responseText)

				}
			}

			llamada.open("get", "https://jsonplaceholder.typicode.com/todos")
			llamada.send()
			/* setTimeout(() => {
				// resolve([{ username: "u1" }, { username: "u2" }])

				reject(new Error("Error de conexión a la base de datos"))
			}, 2000) */
		})

		promesa.then((data) => {
			console.log("La promesa se cumplió")
			console.log(data)
		}, (error) => { console.log(error) })




		const p1 = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve("Promesa cumplida")
			}, 2000)
		})

		const p2 = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve("Catálogo")
			}, 6000)
		})

		Promise.all([p1, p2])
			.then(data => console.log(data)
			)

		Promise.race([p1, p2])
			.then(() => console.log("Promesa cumplida"))


		const obs = Observable.create(
			(observador: Observer<string>) => {
				setTimeout(() => {
					console.log("Primer mensaje enviado")
					observador.next("Llegó el inspector de la compañía eléctrica")
				}, 2000)

				setTimeout(() => {
					observador.next("Alguien tocó la puerta")
				}, 4000)


				setTimeout(() => {
					observador.complete()
				}, 5000)

				setTimeout(() => {
					observador.error("Se incendió la casa")
				}, 6000)

				setTimeout(() => {
					observador.next("Se necesita ayuda")
				}, 10000)
			}
		)

		obs.subscribe(
			data => console.log(data),
			error => console.log(error),
			() => console.log("Cumplido")
		)



	}

	logout() {
		this.auth.logout()
		this.auth.onStateChanges.emit(false)
	}
}
