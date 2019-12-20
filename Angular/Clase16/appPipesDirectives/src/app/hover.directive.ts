import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
	selector: "[hover]"
})
export class HoverDirective {
	@Input() colorNuevo: string = "black"
	@Input() fondoNuevo: string = "transparent"

	constructor(private ref: ElementRef) { }

	ngOnInit() {

	}

	@HostListener("mouseover") cambiar() {
		this.ref.nativeElement.style.backgroundColor = this.fondoNuevo
		this.ref.nativeElement.style.color = this.colorNuevo
	}

	@HostListener("mouseout") volver() {
		this.ref.nativeElement.style.backgroundColor = "transparent"
		this.ref.nativeElement.style.color = "black"
	}
}