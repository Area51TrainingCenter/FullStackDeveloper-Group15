import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: "capital"
})
export class CapitalPipe implements PipeTransform {
	transform(value: string) {
		let retorno = value.split(" ").map((item: string) => {
			let word = item
			return word.toUpperCase()
		}).join(" ")
		return retorno
	}
}