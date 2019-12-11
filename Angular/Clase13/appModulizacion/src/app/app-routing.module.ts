import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './nucleo/home/home.component';
import { LoginComponent } from './nucleo/login/login.component';

const routes: Routes = [
	{ path: "", component: LoginComponent },
	{ path: "home", component: HomeComponent },
	{ path: "libros", loadChildren: "./libros/libros.module#LibrosModule" }
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	declarations: [],
	providers: [],
	exports: [RouterModule]
})
export class AppRouting { }