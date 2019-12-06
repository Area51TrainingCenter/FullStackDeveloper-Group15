import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Producto } from '../modelos/producto';
import { AuthService } from './auth.service';

@Injectable({
	providedIn: 'root'
})
export class ProductService {
	onListaActualizada = new Subject()

	constructor(private http: HttpClient, private auth: AuthService) { }

	get() {
		/* 		const token = this.auth.getToken()
				const headers: HttpHeaders = new HttpHeaders({
					"authorization": `Bearer ${token}`
				}) */

		return this.http.get("http://clase.tibajodemanda.com/producto")
	}

	insert(producto: Producto) {
		/* 		const token = this.auth.getToken()
				const headers: HttpHeaders = new HttpHeaders({
					"authorization": `Bearer ${token}`
				}) */

		return this.http.post("http://clase.tibajodemanda.com/producto", producto)
	}
}
