import { TemplatePortal } from '@angular/cdk/portal';
import { AfterViewInit, Component, TemplateRef, ViewChild, ViewContainerRef, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements AfterViewInit {
  templateportl!: TemplatePortal<any>;
  Havortemplate!: TemplatePortal<any>;

  @ViewChild('templateA') templateA!: TemplateRef<any>;
  @ViewChild('templateB') templateB!: TemplateRef<any>;
  @ViewChild('hoverTemplate') hoverTemplate!: TemplateRef<any>;

  constructor(private viewContainerRef: ViewContainerRef, private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.setTemplateA(); // Set a default template if necessary
    this.cdr.detectChanges();
  }

  setTemplateA() {
    this.templateportl = new TemplatePortal(this.templateA, this.viewContainerRef);
    this.cdr.detectChanges();
  }

  setTemplateB() {
    this.templateportl = new TemplatePortal(this.templateB, this.viewContainerRef);
    this.cdr.detectChanges();
  }

  showTemplate() {
    if (!this.Havortemplate) {
      this.Havortemplate = new TemplatePortal(this.hoverTemplate, this.viewContainerRef);
      this.cdr.detectChanges();
    }
  }

  hideTemplate() {
    
    this.Havortemplate = null!;
    this.cdr.detectChanges();
  }
}
