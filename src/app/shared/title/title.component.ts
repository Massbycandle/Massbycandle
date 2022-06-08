import { AfterViewInit, Component, ElementRef, HostBinding, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {
  @Input() titleText: string = '';
  @Input() secondaryText: string = '';
}
