import { Injectable } from '@angular/core';
import { Candle } from '../model/candle';
import data from '../../assets/data.json'

@Injectable({
  providedIn: 'root'
})
export class CandleService {

  private _candles: Candle[] = [];
  private _galleryImages: String[] = [];

  constructor() {
    this._candles = data['candles'];
    this._galleryImages = data['gallery'];
  }

  get candles() {
    return this._candles;
  }

  get galery() {
    return this._galleryImages;
  }
}
