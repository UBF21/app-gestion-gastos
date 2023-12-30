import { Component, Input, OnInit } from '@angular/core';
import { ItemChartPie } from 'src/app/saldo/models/ItemChartPie';

@Component({
  selector: 'shared-char-pie-component',
  templateUrl: './shared-char-pie-component.component.html',
  styleUrls: ['./shared-char-pie-component.component.css']
})
export class SharedCharPieComponentComponent implements OnInit {

  @Input()
  items: ItemChartPie[] = [];

  data: any = [];
  options: any = [];

  constructor() { }

  ngOnInit(): void {

    console.log(this.items);

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.data = {
      labels: this.items.map(item => item.label),
      datasets: [
        {
          data: this.items.map(item => item.data),
          backgroundColor: this.items.map(item => item.color),
        }
      ]
    };

    this.options = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: textColor
          }
        }
      }
    };
  }

}
