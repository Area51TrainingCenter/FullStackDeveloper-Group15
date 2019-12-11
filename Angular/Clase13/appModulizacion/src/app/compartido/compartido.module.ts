import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertaComponent } from './alerta/alerta.component';



@NgModule({
	declarations: [AlertaComponent],
	imports: [
		CommonModule
	],
	exports: [AlertaComponent]
})
export class CompartidoModule { }
