import { Overlay } from '@angular/cdk/overlay';
import { Component } from '@angular/core';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.css']
})
export class ScrollComponent {

  isopen1=false
  isopen2=false
   positionstrategie=this.overlay.scrollStrategies.noop()

  constructor(private overlay:Overlay){}
}
