import { Component } from '@angular/core';

import { faEnvelope, faPhone, faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  faPhone = faPhone
  faEnvelope = faEnvelope
  faFacebook = faFacebook
  faInstagram = faInstagram
  faShop = faBasketShopping

  instagramPage = 'https://instagram.com/massby_candle?igshid=YmMyMTA2M2Y='
  facebookPage = 'https://www.facebook.com/massbycandle/'
  allegroPage = 'https://allegro.pl/uzytkownik/massby'
  shopeePage = 'https://shopee.pl/massbycandle'


  openSite(siteUrl: string) {
    window.open(siteUrl, '_blank');
  }

  sendEmail() {
    window.location.href = 'mailto:massbycandle@gmail.com;'
  }
}
