import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'saldo-list-page',
  templateUrl: './saldo-list-page.component.html',
  styleUrls: ['./saldo-list-page.component.css']
})
export class SaldoListPageComponent implements OnInit {

  products:any = [];
  constructor(){}

  ngOnInit(): void {
    
  }
}
