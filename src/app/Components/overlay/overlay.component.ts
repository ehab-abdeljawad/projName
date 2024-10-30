import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { DropdownComponent } from '../dropdown/dropdown.component';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent {
  private overref! : OverlayRef
  @ViewChild('trigger') trigger!: ElementRef;
  constructor(private overlay:Overlay){}

  open():void{
   
      const positionstrategy=this.overlay.position().flexibleConnectedTo(this.trigger).withPositions([

        {
          originX: 'start',
          originY: 'bottom',
          overlayX: 'start',
          overlayY: 'top',
          offsetY: 8, // Push the overlay 8px down
        },
        {
          originX: 'end',
          originY: 'bottom',
          overlayX: 'end',
          overlayY: 'top',
          offsetY: 8,
        }
      ])


    this.overref=this.overlay.create(
      {
        positionStrategy:positionstrategy,
        hasBackdrop: true
      }
    )
    const drobdown=new ComponentPortal(DropdownComponent)
    this.overref.attach(drobdown)
    this.overref.backdropClick().subscribe(()=>{
      this.overref.detach(),
      this.overref=null!
    })
    
  }

}  
