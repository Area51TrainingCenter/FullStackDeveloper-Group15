import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    // const empresa = this.activateRoute.snapshot.queryParamMap.get("empresa")
    // console.log(empresa)

    this.activateRoute.queryParamMap.subscribe((info:Params) => {
      console.log(info.params.empresa)
    })
  }

}
