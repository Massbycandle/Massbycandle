import { Component, OnInit } from '@angular/core';
import { Candle } from 'src/app/model/candle';
import { CandleService } from 'src/app/service/candle.service';

@Component({
  selector: 'app-products-main',
  templateUrl: './products-main.component.html',
  styleUrls: ['./products-main.component.scss']
})
export class ProductsMainComponent implements OnInit {

  candles: Candle[] = []

  constructor(private readonly _candleService: CandleService) { }

  ngOnInit(): void {
    this.candles = this._candleService.candles;
  }
}
