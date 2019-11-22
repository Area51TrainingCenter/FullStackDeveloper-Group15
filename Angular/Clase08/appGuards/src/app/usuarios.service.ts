import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  lista: Array<{}> = []

  constructor() { }

  listar() {
    return this.lista
  }

  // {nombre, apellido, id}
  insertar(usuario: { nombre: string, apellido: string, id: number }) {
    this.lista.push(usuario)
  }

  editar(id: number) {
    return this.lista.filter((el: any) => el.id == id)[0]
  }
}
