import { AfterViewInit, Component, ElementRef, HostListener, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';

import { faAngleUp, faBars, faCopyright } from '@fortawesome/free-solid-svg-icons';

import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements AfterViewInit {

  faAngleUp = faAngleUp
  faBars = faBars
  faCopyright = faCopyright

  //sections
  @ViewChild('about_massby', { read: ElementRef }) aboutMassbySection!: ElementRef;
  @ViewChild('about_candles', { read: ElementRef }) aboutCandlesSection!: ElementRef;
  @ViewChild('gallery', { read: ElementRef }) gallerySection!: ElementRef;
  @ViewChild('products', { read: ElementRef }) productsSection!: ElementRef;
  @ViewChild('contact', { read: ElementRef }) contactSection!: ElementRef;
  @ViewChild('home', { read: ElementRef }) homeSection!: ElementRef;

  activeSectionId: string = '';

  constructor(private readonly deviceService: DeviceDetectorService) { }

  isMobile(): boolean {
    return this.deviceService.isMobile()
  }

  ngAfterViewInit(): void {
    const allSections = [this.aboutMassbySection, this.aboutCandlesSection, this.gallerySection, this.productsSection, this.contactSection];
    document.addEventListener('scroll', () => {
      const navBar = document.getElementById('navbar');
      if (window.scrollY > 20) {
        navBar?.classList.add("sticky");
      } else {
        navBar?.classList.remove("sticky");
      }

      const scrollUpBtn = document.getElementById('scroll-up-btn');
      if (window.scrollY > 500) {
        scrollUpBtn?.classList.add("show");
      }
      else {
        scrollUpBtn?.classList.remove("show");
      }

      const visibleElements = allSections.filter(elt => {
        const position = elt.nativeElement.getBoundingClientRect();
        return position.top < window.innerHeight && position.bottom >= 0;
      }).sort((e1, e2) => {
        const n1 = this.calculateVisibility(e1.nativeElement.getBoundingClientRect());
        const n2 = this.calculateVisibility(e2.nativeElement.getBoundingClientRect());
        if (n1 > n2) {
          return 1;
        }
        if (n1 < n2) {
          return -1;
        }
        return 0;
      });
      if (visibleElements.length > 0) {
        this.activeSectionId = visibleElements[visibleElements.length - 1].nativeElement.id + "_nav";
      } else {
        this.activeSectionId = '';
      }
      this.setActive(this.activeSectionId);
    }, { passive: true });
  }

  onSectionSelect() {
    var navbarMenuItems = document.getElementById('navbar-menu-items');
    var menuHamburgerBtn = document.getElementById('menu-hamburger')
    navbarMenuItems?.classList.remove('active');
    menuHamburgerBtn?.classList.remove('active');
    window.scroll({ behavior: 'smooth' })
  }

  toogleMenu() {
    var navbarMenuItems = document.getElementById('navbar-menu-items');
    var menuHamburgerBtn = document.getElementById('menu-hamburger')
    navbarMenuItems?.classList.toggle('active');
    menuHamburgerBtn?.classList.toggle('active');
  }

  private setActive(activeElemId: string) {
    Array.from(document.getElementsByClassName('active-section')).forEach(elt => {
      elt.classList.remove('active-section');
    });
    if (activeElemId) {
      document.getElementById(activeElemId)?.classList.add('active-section');
    }
  }

  private calculateVisibility(rect: any): number {
    const windowHeight = window.innerHeight
    const docScroll = document.body.scrollTop
    const divPosition = rect.top
    const divHeight = rect.height
    const hiddenBefore = docScroll - divPosition
    const hiddenAfter = (divPosition + divHeight) - (docScroll + windowHeight);

    if ((docScroll > divPosition + divHeight) || (divPosition > docScroll + windowHeight)) {
      return 0;
    } else {
      var result = 100;
      if (hiddenBefore > 0) {
        result -= (hiddenBefore * 100) / divHeight;
      }
      if (hiddenAfter > 0) {
        result -= (hiddenAfter * 100) / divHeight;
      }
      return result;
    }
  }
}
