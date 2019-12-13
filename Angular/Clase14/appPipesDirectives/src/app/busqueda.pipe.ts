import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'busqueda'
})
export class BusquedaPipe implements PipeTransform {

	transform(value: any[], texto: string): any {
		return value.filter(item => {
			if (item.sinopsis.toLowerCase().indexOf(texto) > -1) {
				return true
			}

			return false
		});
	}

}
