import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { AuthService } from './auth.service';

@Injectable()
export class AppInterceptor implements HttpInterceptor {

	constructor(private auth: AuthService) { }

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

		const token = this.auth.getToken()

		let clon = req.clone({ headers: req.headers.append("authorization", `Bearer ${token}`) })


		return next.handle(clon)
	}

}