import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutoresRoutingModule } from './autores-routing.module';
import { ListadoAutoresComponent } from './listado-autores/listado-autores.component';
import { EdicionAutoresComponent } from './edicion-autores/edicion-autores.component';
import { NuevoAutoresComponent } from './nuevo-autores/nuevo-autores.component';


@NgModule({
  declarations: [ListadoAutoresComponent, EdicionAutoresComponent, NuevoAutoresComponent],
  imports: [
    CommonModule,
    AutoresRoutingModule
  ]
})
export class AutoresModule { }
