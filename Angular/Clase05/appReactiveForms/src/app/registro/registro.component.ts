import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from "@angular/forms";

@Component({
	selector: 'app-registro',
	templateUrl: './registro.component.html',
	styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

	grupo: FormGroup

	dominiosGratuitos: Array<string> = ["gmail.com", "yahoo.com", "outlook.com", "hotmail.com"]

	constructor() {
		this.grupo = new FormGroup({
			nombre: new FormControl("Sergio", Validators.required),
			correo: new FormControl("correo5@correo.com", [Validators.required, Validators.email, this.validarCorreoGratuito.bind(this), this.soloCorreoEmpresarial("area51.pe")]),
			contrasena: new FormControl("1234", Validators.required),
			confirmacion: new FormControl("1234", Validators.required)
		})
	}

	validarCorreoGratuito(fc: FormControl): { [s: string]: boolean } {
		if (!fc || !fc.value) return null

		if (fc.value.trim() == "") return null

		const valor = fc.value
		const partes = valor.split("@")

		if (partes.length == 1) return null

		const dominio = partes[1].toLowerCase()

		if (this.dominiosGratuitos.indexOf(dominio) > -1) {
			return { "correoGratuito": true }
		}

		return null
	}

	soloCorreoEmpresarial(dominioValido: string): ValidatorFn {
		const validarCorreoEmpresarial = (fc: FormControl): { [s: string]: boolean } => {
			if (!fc || !fc.value || fc.value.split("@").length == 1) return null

			const dominio = fc.value.split("@")[1].toLowerCase()

			if (dominio != dominioValido) return { noCorreoEmpresarial: true }

			return null
		}

		return validarCorreoEmpresarial
	}



	cargarData() {
		this.grupo.setValue({
			nombre: "abc",
			correo: "miCorreo@correo.com",
			contrasena: "12345",
			confirmacion: "12345"
		})
	}

	cargarDataParcial() {
		this.grupo.patchValue({
			nombre: "Javier",
			correo: "empresa@correo.com"
		})
	}

	resetear() {
		this.grupo.reset()
	}

	ngOnInit() {
	}

	registrar() {
		if (this.grupo.valid) {
			console.log("Value", this.grupo.value)
			console.log("getRawValue", this.grupo.getRawValue())
			console.log("Datos válidos")
		} else {
			console.log("Datos inválidos")
		}
		// console.log(this.grupo)
	}

}
