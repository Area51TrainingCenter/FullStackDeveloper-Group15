import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './nucleo/home/home.component';
import { LoginComponent } from './nucleo/login/login.component';

const routes: Routes = [
	{ path: "", component: LoginComponent },
	{ path: "home", component: HomeComponent },
	{ path: "libros", loadChildren: () => import("./libros/libros.module").then(mod => mod.LibrosModule) },
	{ path: "autores", loadChildren: () => import("./autores/autores.module").then(mod => mod.AutoresModule) },
	{ path: "editoriales", loadChildren: () => import("./editoriales/editoriales.module").then(mod => mod.EditorialesModule) }
	/* { path: "libros", loadChildren: "./libros/libros.module#LibrosModule" } */
]

@NgModule({
	imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })],
	declarations: [],
	providers: [],
	exports: [RouterModule]
})
export class AppRouting { }