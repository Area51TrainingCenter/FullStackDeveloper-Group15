import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EdicionLibrosComponent } from './edicion-libros/edicion-libros.component';
import { ListadoLibrosComponent } from './listado-libros/listado-libros.component';
import { NuevoLibrosComponent } from './nuevo-libros/nuevo-libros.component';

const routes: Routes = [
	{ path: "", component: ListadoLibrosComponent },
	{ path: "nuevo", component: NuevoLibrosComponent },
	{ path: "edicion", component: EdicionLibrosComponent }
]

@NgModule({
	imports: [RouterModule.forChild(routes)]
})
export class LibrosRouting { }