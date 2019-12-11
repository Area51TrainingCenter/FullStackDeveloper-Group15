import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
	declarations: [MenuComponent, LoginComponent, HomeComponent],
	imports: [
		CommonModule,
		RouterModule
	],
	exports: [MenuComponent]
})
export class NucleoModule { }
