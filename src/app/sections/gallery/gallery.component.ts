import { Component, OnInit } from '@angular/core';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryImageSize, NgxGalleryOptions } from 'ngx-gallery-9';
import { MobileService } from 'src/app/service/mobile.service';
import { CandleService } from '../../service/candle.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[] = [];
  galleryImages: NgxGalleryImage[] = [];

  private isMobile: boolean = true;

  constructor(private readonly _candleService: CandleService,
    private readonly mobileService: MobileService) {
  }

  ngOnInit(): void {
    this.isMobile = this.mobileService.isMobile();
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

    const imageUrls = this._candleService.galery.map(imageName => "assets/images/gallery/" + imageName);
    const mobileImageUrls = this._candleService.galery.map(imageName => "assets/images/mobile/gallery/" + imageName);
    imageUrls.forEach((imageUrl, index) => {
      const entry = {
        medium: this.isMobile ? mobileImageUrls[index] : imageUrl,
        big: this.isMobile ? mobileImageUrls[index] : imageUrl
      }
      this.galleryImages.push(entry);
    })
  }
}
