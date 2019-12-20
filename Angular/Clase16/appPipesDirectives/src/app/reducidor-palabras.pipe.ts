import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'reducidorPalabras'
})
export class ReducidorPalabrasPipe implements PipeTransform {

	transform(value: string, cantidadPalabras: number = 5): any {
		const palabras = value.split(" ")
		return palabras.slice(0, cantidadPalabras).join(" ")
	}

}
