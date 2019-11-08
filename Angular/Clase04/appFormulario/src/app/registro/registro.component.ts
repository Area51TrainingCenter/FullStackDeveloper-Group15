import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
	selector: 'app-registro',
	templateUrl: './registro.component.html',
	styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

	nombre: string = "FullStack"

	@ViewChild("formulario", { static: true }) formularioRegistro

	constructor() { }

	ngOnInit() {
	}

	registrar() {
		if (this.formularioRegistro.valid) {
			console.log("Información ha sido grabada")
		} else {
			console.log("El formulario no es válido")
		}
		// console.log(this.formularioRegistro)
	}

}
