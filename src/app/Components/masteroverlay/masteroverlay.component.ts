import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormspopupComponent } from '../formspopup/formspopup.component';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { LinklistComponent } from '../linklist/linklist.component';

@Component({
  selector: 'app-masteroverlay',
  templateUrl: './masteroverlay.component.html',
  styleUrls: ['./masteroverlay.component.css']
})
export class MasteroverlayComponent {
  
 private refoverley!:OverlayRef
 @ViewChild('trigger') trigger!:ElementRef
  constructor(private overlay:Overlay){}
  
  open():void{
    this.refoverley = this.overlay.create({
    positionStrategy:this.overlay.position().global().centerHorizontally().centerVertically(),
    hasBackdrop:true
    })

    const popupcpmponent= new ComponentPortal(FormspopupComponent)

    this.refoverley.attach(popupcpmponent)
    this.refoverley.backdropClick().subscribe(()=>{
      this.refoverley.detach(),
      this.refoverley=null!
    })

    
  }

  dropdown(){
    if(this.refoverley && this.refoverley.hasAttached()){
      this.refoverley.detach()
      this.refoverley=null!
    }else{
    const positionstrategy = this.overlay.position().flexibleConnectedTo(this.trigger).withPositions([
      { originX: 'start', originY: 'bottom', overlayX: 'start', overlayY: 'top' },
    { originX: 'end', originY: 'top', overlayX: 'end', overlayY: 'bottom' }
    ])
    this.refoverley = this.overlay.create({
      positionStrategy:positionstrategy
    })

    const dropdownlist=new ComponentPortal(LinklistComponent)
    this.refoverley.attach(dropdownlist)
    this.refoverley.backdropClick().subscribe(()=>{
      this.refoverley.detach()
      this.refoverley=null!
    })

  }
  }

}
