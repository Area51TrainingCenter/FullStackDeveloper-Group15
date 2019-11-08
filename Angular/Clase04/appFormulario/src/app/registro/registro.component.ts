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
			console.log(this.formularioRegistro.value)
			this.formularioRegistro.reset({ nombre: "Zoila" })
		} else {
			console.log("El formulario no es válido")
		}
		// console.log(this.formularioRegistro)
	}

	cargarTodo() {
		this.formularioRegistro.setValue({ nombre: "Marcela", correo: "marcela@correo.com", contrasena: "1234" })
	}

	cargarParcial() {
		this.formularioRegistro.form.patchValue({ correo: "marcela@correo.com", contrasena: "1234" })
	}




}
