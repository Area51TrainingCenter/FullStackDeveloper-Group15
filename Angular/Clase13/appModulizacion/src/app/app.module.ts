import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouting } from './app-routing.module';
import { AppComponent } from './app.component';
import { Componente1Component } from './componente1/componente1.component';
import { Componente2Component } from './componente2/componente2.component';
import { NucleoModule } from './nucleo/nucleo.module';


@NgModule({
	declarations: [
		AppComponent,
		Componente1Component,
		Componente2Component
	],
	imports: [
		BrowserModule,
		AppRouting,
		NucleoModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
