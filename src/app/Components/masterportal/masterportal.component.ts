import { ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import { Component, ComponentRef, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FormspopupComponent } from '../formspopup/formspopup.component';

@Component({
  selector: 'app-masterportal',
  templateUrl: './masterportal.component.html',
  styleUrls: ['./masterportal.component.css']
})
export class MasterportalComponent {

     
  porteltemplate!: TemplatePortal<any>
  porteltemplate2!: TemplatePortal<any>
  componentportal!:ComponentPortal<any>
  isComponentVisible: boolean = false;
  @ViewChild('image') image! : TemplateRef<any>
  @ViewChild('image2') image2! : TemplateRef<any>
  @ViewChild('form') form! :ComponentRef<FormspopupComponent>

  constructor(private viewcontainer:ViewContainerRef){}
  settemplate():void{
     this.porteltemplate=new TemplatePortal(this.image,this.viewcontainer)
     this.porteltemplate2=new TemplatePortal(this.image2,this.viewcontainer)

  }

  setComponent(): void {
    if (this.isComponentVisible) {
      // Hide the component
      this.componentportal = null!;
      this.isComponentVisible = false;
    } else {
      // Show the component
      this.componentportal = new ComponentPortal(FormspopupComponent);
      this.isComponentVisible = true;
    }
  }

}
