import { Component, Input, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryImageSize, NgxGalleryOptions } from 'ngx-gallery-9';
import { Candle } from 'src/app/model/candle';
import { CandleVariant } from "../../../model/candle_variant";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() candle!: Candle;

  galleryOptions: NgxGalleryOptions[] = [];
  galleryImages: NgxGalleryImage[] = [];

  faSearch = faSearch

  constructor() { }

  ngOnInit(): void {
    this.galleryOptions = [
      {
        imageAutoPlay: false,
        imageAutoPlayPauseOnHover: false,
        imageBullets: false,
        previewBullets: true,
        previewAutoPlay: false,
        imageArrows: false,
        imageAnimation: NgxGalleryAnimation.Fade,
        imageSize: NgxGalleryImageSize.Cover,
        previewCloseOnEsc: true,
        width: '100%',
        thumbnails: false,
        lazyLoading: true
      }
    ]

    this.candle.images.forEach(imageUrl => {
      const entry = {
        medium: this.candle.thumb,
        big: imageUrl
      }
      this.galleryImages.push(entry);
    })
  }

  getDescription(variant: CandleVariant): string {
    return `Pojemność: ${variant.volume}ml \\ Knot: ${variant.candle_core} \\ Czas palenia: ok. ${variant.burning_time}h`;
  }

  openPage(siteUrl: string): void {
    if (siteUrl) {
      window.open(siteUrl, '_blank');
    }
  }
}
