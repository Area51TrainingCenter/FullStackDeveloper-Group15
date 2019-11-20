import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  filtrarMarca(){
    this.router.navigate(["/cliente", "listado"], {queryParams: {marca: 'esika'}, queryParamsHandling: "merge", preserveFragment: true})
  }

}
