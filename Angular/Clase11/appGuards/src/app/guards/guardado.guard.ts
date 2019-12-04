import { Injectable } from '@angular/core';
import { CanDeactivate } from "@angular/router";

export interface ICanDeactivate {
	guardado: () => boolean
}

@Injectable({
	providedIn: 'root'
})
export class GuardadoGuard implements CanDeactivate<ICanDeactivate> {
	canDeactivate(comp: ICanDeactivate): boolean {
		const estado: boolean = comp.guardado()

		if (estado) {
			if (confirm("Hay datos no guardados. ¿Desea guardarlos?")) {
				return false
			} else {
				return true
			}
		}

		return true

	}

}
