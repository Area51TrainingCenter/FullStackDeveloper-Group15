import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorialesRoutingModule } from './editoriales-routing.module';
import { ListadoEditorialesComponent } from './listado-editoriales/listado-editoriales.component';
import { NuevoEditorialesComponent } from './nuevo-editoriales/nuevo-editoriales.component';
import { EdicionEditorialesComponent } from './edicion-editoriales/edicion-editoriales.component';


@NgModule({
  declarations: [ListadoEditorialesComponent, NuevoEditorialesComponent, EdicionEditorialesComponent],
  imports: [
    CommonModule,
    EditorialesRoutingModule
  ]
})
export class EditorialesModule { }
