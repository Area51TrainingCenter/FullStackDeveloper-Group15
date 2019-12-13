import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BusquedaPipe } from './busqueda.pipe';
import { CapitalPipe } from './capital.pipe';
import { ReducidorPipe } from './pipes/reducidor.pipe';
import { ReducidorPalabrasPipe } from './reducidor-palabras.pipe';

@NgModule({
	declarations: [
		AppComponent,
		CapitalPipe,
		ReducidorPipe,
		ReducidorPalabrasPipe,
		BusquedaPipe
	],
	imports: [
		BrowserModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
