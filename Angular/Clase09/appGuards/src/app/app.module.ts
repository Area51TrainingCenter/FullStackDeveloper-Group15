import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { EdicionComponent } from './edicion/edicion.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [
	{ path: "login", component: LoginComponent },
	{ path: "home", component: HomeComponent, canActivate: [AuthenticationGuard] },
	{
		path: "productos", component: ProductosComponent, canActivateChild: [AuthenticationGuard], children: [
			{ path: "edicion", component: EdicionComponent },
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
		NuevoComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(routes)
	],
	providers: [AuthenticationGuard],
	bootstrap: [AppComponent]
})
export class AppModule { }
