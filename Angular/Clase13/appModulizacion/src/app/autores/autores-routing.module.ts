import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EdicionAutoresComponent } from './edicion-autores/edicion-autores.component';
import { ListadoAutoresComponent } from './listado-autores/listado-autores.component';
import { NuevoAutoresComponent } from './nuevo-autores/nuevo-autores.component';


const routes: Routes = [
	{ path: "", component: ListadoAutoresComponent },
	{ path: "nuevo", component: NuevoAutoresComponent },
	{ path: "edicion", component: EdicionAutoresComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class AutoresRoutingModule { }
