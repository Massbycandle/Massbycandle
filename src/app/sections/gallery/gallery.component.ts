import { Component, OnInit } from '@angular/core';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryImageSize, NgxGalleryOptions } from 'ngx-gallery-9';
import { CandleService } from '../../service/candle.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  imagesUrls: String[] = []

  galleryOptions: NgxGalleryOptions[] = [];
  galleryImages: NgxGalleryImage[] = [];

  constructor(private readonly _candleService: CandleService) { }

  ngOnInit(): void {
    this.galleryOptions = [
      {
        imageAutoPlay: true,
        imageAutoPlayPauseOnHover: true,
        imageBullets: true,
        previewBullets: true,
        previewAutoPlay: false,
        imageArrowsAutoHide: true,
        imageAnimation: NgxGalleryAnimation.Fade,
        imageSize: NgxGalleryImageSize.Cover,
        previewCloseOnEsc: true,
        height: '650px',
        width: '100%',
        thumbnails: false,
        lazyLoading: true
      },
      { breakpoint: 870, height: '500px' },
      { breakpoint: 550, height: '350px' },
      { breakpoint: 450, height: '300px' }
    ]

    this.imagesUrls = this._candleService.galery.map(imageName => "assets/images/gallery/" + imageName);
    this.imagesUrls.forEach(imageUrl => {
      const entry = {
        medium: imageUrl,
        big: imageUrl
      }
      this.galleryImages.push(entry);
    })
  }
}
