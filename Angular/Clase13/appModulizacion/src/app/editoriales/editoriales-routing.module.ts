import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EdicionEditorialesComponent } from './edicion-editoriales/edicion-editoriales.component';
import { ListadoEditorialesComponent } from './listado-editoriales/listado-editoriales.component';
import { NuevoEditorialesComponent } from './nuevo-editoriales/nuevo-editoriales.component';


const routes: Routes = [
	{
		path: "editoriales", children: [
			{ path: "listado", component: ListadoEditorialesComponent },
			{ path: "nuevo", component: NuevoEditorialesComponent },
			{ path: "edicion", component: EdicionEditorialesComponent }
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class EditorialesRoutingModule { }
