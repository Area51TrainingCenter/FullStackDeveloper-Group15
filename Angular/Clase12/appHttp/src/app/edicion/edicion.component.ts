import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ICanDeactivate } from '../guards/guardado.guard';

@Component({
	selector: 'app-edicion',
	templateUrl: './edicion.component.html',
	styleUrls: ['./edicion.component.css']
})
export class EdicionComponent implements OnInit, ICanDeactivate {
	grupo: FormGroup

	datosModificados: boolean = true

	dataInicial = {
		nombre: "Carlos"
	}

	constructor() {
		this.grupo = new FormGroup({
			nombre: new FormControl(this.dataInicial.nombre)
		})

		this.grupo.valueChanges.subscribe(() => {
			this.datosModificados = false
		})
	}

	ngOnInit() {
	}

	guardado(): boolean {
		if (this.datosModificados) return false

		if (this.dataInicial.nombre == this.grupo.value.nombre) {
			return false
		} else {
			return true
		}
	}

	salvar() {
		this.datosModificados = true
	}

}
