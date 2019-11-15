import { Injectable } from '@angular/core';
import { Usuario } from './usuario';

@Injectable({
	providedIn: 'root'
})
export class UsuarioService {

	private usuarios: Array<Usuario> = [
		{ correo: "correo1@correo.com", contrasena: "1234" },
		{ correo: "correo2@correo.com", contrasena: "1234" }
	]

	constructor() { }

	login(usuario: Usuario) {
		const encontrados: any = this.usuarios.find(it => it.correo == usuario.correo && it.contrasena == usuario.contrasena)

		if (encontrados.length > 0) return true

		return false
	}
}
