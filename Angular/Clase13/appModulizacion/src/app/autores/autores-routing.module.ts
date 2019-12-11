import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EdicionLibrosComponent } from '../libros/edicion-libros/edicion-libros.component';
import { ListadoAutoresComponent } from './listado-autores/listado-autores.component';
import { NuevoAutoresComponent } from './nuevo-autores/nuevo-autores.component';


const routes: Routes = [
	{
		path: "autores", children: [
			{ path: "listado", component: ListadoAutoresComponent },
			{ path: "nuevo", component: NuevoAutoresComponent },
			{ path: "edicion", component: EdicionLibrosComponent }
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AutoresRoutingModule { }
