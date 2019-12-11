import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CompartidoModule } from '../compartido/compartido.module';
import { AutoresRoutingModule } from './autores-routing.module';
import { EdicionAutoresComponent } from './edicion-autores/edicion-autores.component';
import { ListadoAutoresComponent } from './listado-autores/listado-autores.component';
import { NuevoAutoresComponent } from './nuevo-autores/nuevo-autores.component';

@NgModule({
	declarations: [ListadoAutoresComponent, EdicionAutoresComponent, NuevoAutoresComponent],
	imports: [
		CommonModule,
		AutoresRoutingModule,
		CompartidoModule
	]
})
export class AutoresModule { }
