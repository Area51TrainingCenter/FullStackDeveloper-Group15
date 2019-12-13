import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
	selector: '[appSubirImagen]'
})
export class SubirImagenDirective {

	@Output() onHover = new EventEmitter()
	@Output() onSalida = new EventEmitter()

	constructor() { }

	@HostListener("dragover", ["$event"]) encima($event) {
		$event.preventDefault()
		this.onHover.emit(true)
	}

	@HostListener("dragleave", ["$event"]) salir($event) {
		$event.preventDefault()
		this.onHover.emit(false)
	}

	@HostListener("drop", ["$event"]) soltar($event) {
		$event.preventDefault()
		const data = $event.dataTransfer

		this.onSalida.emit(data.dataTransfer)

	}

}
