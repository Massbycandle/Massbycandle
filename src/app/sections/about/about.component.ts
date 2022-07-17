import { Component, Input, OnInit, Type, ViewChild } from '@angular/core';
import { DynamicChildLoaderDirective } from 'src/app/directives/dynamic-child-loader.directive';
import { AboutCandlesComponent } from './about-candles/about-candles.component';
import { AboutMassbyComponent } from './about-massby/about-massby.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  @Input() title: string = '';
  @Input() secondaryTitle: string = '';
  @Input() imageUrl: string = '';
  @Input() imageAlt: string = '';
  @Input() titleInnerHtml: string = '';
  @Input() contentComponentName: string = '';

  @ViewChild(DynamicChildLoaderDirective, { static: true }) dynamicChild!: DynamicChildLoaderDirective;

  constructor() { }

  ngOnInit(): void {
    this.createComponent(this.getType(this.contentComponentName));
  }

  private createComponent(type: Type<unknown>) {
    this.dynamicChild.viewContainerRef.createComponent(type)
  }

  private getType(name: string): Type<unknown> {
    if (name === 'about-candles') {
      return AboutCandlesComponent;
    }
    return AboutMassbyComponent;
  }
}
