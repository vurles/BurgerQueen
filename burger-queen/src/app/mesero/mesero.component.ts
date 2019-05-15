import { Component, OnInit } from '@angular/core';
import { Waiter } from '../models/order';
import { from } from 'rxjs';
// import {Waiter} from '../waiter';
//import { from } from 'rxjs';
// import { waiter } from '../app.component';

@Component({
  selector: 'app-mesero',
  templateUrl: './mesero.component.html',
  styleUrls: ['./mesero.component.css']
})
export class MeseroComponent implements OnInit {
    waiter: Waiter = {
      id:1,
      name:'mesero'
    };
  //waiter = 'mesero';
  constructor() { }

  ngOnInit() {
  }

 

}
