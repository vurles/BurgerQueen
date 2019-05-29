import { Component, OnInit } from '@angular/core';
import { Waiter } from '../models/order';
import { MENU } from '../mock/mock-mesero';
// import {Waiter} from '../waiter';
//import { from } from 'rxjs';
// import { waiter } from '../app.component';

@Component({
  selector: 'app-mesero',
  templateUrl: './mesero.component.html',
  styleUrls: ['./mesero.component.css']
})
export class MeseroComponent implements OnInit {
  menu =  MENU;
  /* Inicializacion de un objeto del tipo Waiter */
  // waiter: Waiter = {id: 0, name : '' }
  /*                                             */
  selectedWaiter: Waiter;
   
  constructor() { }

  ngOnInit() {
    console.log(this.menu);
  }
  onSelect(waiter : Waiter): void {
    this.selectedWaiter = waiter;
  }
}
