import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CapitalPipe } from './capital.pipe';
import { ReducidorPipe } from './pipes/reducidor.pipe';


@NgModule({
	declarations: [
		AppComponent,
		CapitalPipe,
		ReducidorPipe
	],
	imports: [
		BrowserModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
