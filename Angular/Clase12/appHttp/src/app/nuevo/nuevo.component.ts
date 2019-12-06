import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
	selector: 'app-nuevo',
	templateUrl: './nuevo.component.html',
	styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

	grupo: FormGroup

	constructor(private productoService: ProductService, private router: Router) {
		this.grupo = new FormGroup({
			nombre: new FormControl(null, Validators.required),
			descripcion: new FormControl(null, Validators.required)
		})
	}

	agregar() {
		this.productoService.insert(this.grupo.value)
			.subscribe(
				data => {
					this.productoService.onListaActualizada.next()
					this.router.navigate(["/productos"])
				}
			)

	}

	ngOnInit() {
	}

}
