import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
   const fragmento = this.activatedRoute.snapshot.fragment
   this.activatedRoute.fragment.subscribe((info:any) => console.log(info))
   console.log(fragmento)
  }

}
