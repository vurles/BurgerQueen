import { Component, OnInit, Input } from '@angular/core';
import { Waiter } from '../models/order';

@Component({
  selector: 'app-cocina',
  templateUrl: './cocina.component.html',
  styleUrls: ['./cocina.component.css']
})
export class CocinaComponent implements OnInit {
  @Input() waiter: Waiter;
  
  constructor() { }

  ngOnInit() {
  }

}
