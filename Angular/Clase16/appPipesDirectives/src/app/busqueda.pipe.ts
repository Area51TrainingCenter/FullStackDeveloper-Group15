import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'busqueda'
})
export class BusquedaPipe implements PipeTransform {

	transform(value: any[], texto: string, campo: string): any {
		return value.filter(item => {
			if (item[campo].toLowerCase().indexOf(texto.toLowerCase()) > -1) {
				return true
			}

			return false
		});
	}

}
