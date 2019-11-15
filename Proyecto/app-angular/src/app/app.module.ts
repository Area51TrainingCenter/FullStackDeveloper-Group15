import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListadoComponent } from './listado/listado.component';
import { LoginComponent } from './login/login.component';


const rutas: Routes = [
	{ path: "", component: LoginComponent },
	{ path: "home", component: HomeComponent },
	{ path: "listado", component: ListadoComponent }
]

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		HomeComponent,
		ListadoComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(rutas),
		ReactiveFormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
