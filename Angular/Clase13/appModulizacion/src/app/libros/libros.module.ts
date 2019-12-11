import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EdicionLibrosComponent } from './edicion-libros/edicion-libros.component';
import { LibrosRouting } from './libros-routing.module';
import { LibrosService } from './libros.service';
import { ListadoLibrosComponent } from './listado-libros/listado-libros.component';
import { NuevoLibrosComponent } from './nuevo-libros/nuevo-libros.component';

@NgModule({
	declarations: [ListadoLibrosComponent, EdicionLibrosComponent, NuevoLibrosComponent],
	imports: [
		CommonModule,
		LibrosRouting
	],
	providers: [LibrosService]
})
export class LibrosModule { }
