import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	fecha: Date = new Date()
	curso: string = "FullStack Developer"
	usuario = { username: "user01", password: "password01" }

	precio: number = 10.99

	libros = [
		{ titulo: "El Sexto", autor: "José María Arguedas", sinopsis: "Narra la historia de los presos de la cárcel llamada El Sexto la cual se ubica en lo que actualmente es la Comandancia General de Tránsito en la avenida Alfonso Ugarte", anno: 1978 },
		{ titulo: "Pantaleón y las visitadoras", autor: "Mario Vargas Llosa", sinopsis: "Narra la historia (o mito) del servicio de 'visitadoras' implementado en las guarniciones fronterizas del Ejército", anno: 1980 },
		{ titulo: "El Perfume", autor: "Patrick Suskind", sinopsis: "Cuenta la historia de un asesino que mataba mujeres para robarles su 'esencia' y luego crear perfumes que dominaran a otras personas", anno: 1960 },
		{ titulo: "El Caballero Carmelo", autor: "Abraham Valdelomar", sinopsis: "Trata de la historia de un gallo viejo llamado 'Carmelo' el cual es obligado a pelear con un gallo más joven llamado 'el ají seco'", anno: 1950 }
	]

	textoABuscar: string = ""

	seleccion: boolean = false

	sobre(respuesta) {
		this.seleccion = respuesta
	}

	mostrarImagen(archivos: FileList) {
		console.log(archivos)
	}

}
