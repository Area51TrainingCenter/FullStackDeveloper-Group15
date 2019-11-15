import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { EdicionComponent } from './edicion/edicion.component';
import { HomeComponent } from './home/home.component';
import { ListadoComponent } from './listado/listado.component';
import { LoginComponent } from './login/login.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { NuevoComponent } from './nuevo/nuevo.component';

// http://midominio.com
// http://midominio.com/home

const rutas: Routes = [
	{ path: "", component: LoginComponent },
	{ path: "home", component: HomeComponent },
	{ path: "listado", component: ListadoComponent },
	{ path: "edicion", component: EdicionComponent },
	{ path: "nuevo", component: NuevoComponent },
	/* { path: "**", component: NoEncontradoComponent } */
	{ path: "**", redirectTo: "home" }
]


@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		HomeComponent,
		ListadoComponent,
		EdicionComponent,
		NuevoComponent,
		NoEncontradoComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(rutas)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
