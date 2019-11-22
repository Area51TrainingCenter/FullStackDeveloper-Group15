import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';
import { EdicionUsuarioComponent } from './edicion-usuario/edicion-usuario.component';
import { NuevoUsuarioComponent } from './nuevo-usuario/nuevo-usuario.component';
import { RouterModule, Routes } from "@angular/router"

import { ReactiveFormsModule } from "@angular/forms"

const rutas: Routes = [
  { path: "", component: LoginComponent },
  { path: "home", component: HomeComponent },
  {
    path: "usuarios", component: ListadoUsuariosComponent, children: [
      { path: "edicion/:id", component: EdicionUsuarioComponent },
      { path: "nuevo", component: NuevoUsuarioComponent }
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ListadoUsuariosComponent,
    EdicionUsuarioComponent,
    NuevoUsuarioComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
