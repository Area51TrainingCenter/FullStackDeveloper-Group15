import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'reducidor'
})
export class ReducidorPipe implements PipeTransform {

	transform(value: any, cantidadLetras: number): any {
		if (value.length > cantidadLetras) {
			return value.substring(1, cantidadLetras)
		}
		return value;
	}

}
