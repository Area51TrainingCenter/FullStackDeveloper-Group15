import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
	providedIn: 'root'
})
export class ProductService {

	constructor(private http: HttpClient, private auth: AuthService) { }

	get() {
		const token = this.auth.getToken()
		const headers: HttpHeaders = new HttpHeaders({
			"authorization": `Bearer ${token}`
		})

		return this.http.get("http://clase.tibajodemanda.com/producto", { headers })

	}
}
