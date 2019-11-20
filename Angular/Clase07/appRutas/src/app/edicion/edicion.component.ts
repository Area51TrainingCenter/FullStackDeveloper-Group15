import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.component.html',
  styleUrls: ['./edicion.component.css']
})
export class EdicionComponent implements OnInit {
  id: any

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // this.id = this.activatedRoute.snapshot.paramMap.get("id")

    this.activatedRoute.paramMap.subscribe((info:ParamMap)=>{
      // console.log(info.get("id"))
      this.id = info.get("id")
    })

    // console.log(this.id)
  }

  nuevoRegistro() {
    this.router.navigate(['cliente','edicion', 50])
  }

}
