import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { EdicionComponent } from './edicion/edicion.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { GuardadoGuard } from './guards/guardado.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { ProductosComponent } from './productos/productos.component';
import { RegistroComponent } from './registro/registro.component';
import { AppInterceptor } from './services/app.interceptor';

const routes: Routes = [
	{ path: "login", component: LoginComponent },
	{ path: "registro", component: RegistroComponent },
	{ path: "home", component: HomeComponent, canActivate: [AuthenticationGuard] },
	{
		path: "productos", component: ProductosComponent, canActivateChild: [AuthenticationGuard], children: [
			{ path: "edicion", component: EdicionComponent, canDeactivate: [GuardadoGuard] },
			{ path: "nuevo", component: NuevoComponent }
		]
	},
	{ path: "**", redirectTo: "login" }
]

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		HomeComponent,
		ProductosComponent,
		EdicionComponent,
		NuevoComponent,
		RegistroComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(routes),
		ReactiveFormsModule,
		HttpClientModule
	],
	providers: [AuthenticationGuard, {
		provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true
	}],
	bootstrap: [AppComponent]
})
export class AppModule { }
