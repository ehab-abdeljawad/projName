import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OverlayModule } from '@angular/cdk/overlay';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './Components/test/test.component';
import { PortalComponent } from './Components/portal/portal.component';
import { PortalModule } from '@angular/cdk/portal';
import { OverlayComponent } from './Components/overlay/overlay.component';
import { DropdownComponent } from './Components/dropdown/dropdown.component';
import { MasteroverlayComponent } from './Components/masteroverlay/masteroverlay.component';
import { FormspopupComponent } from './Components/formspopup/formspopup.component';
import { LinklistComponent } from './Components/linklist/linklist.component';
import { ScrollComponent } from './Components/scroll/scroll.component';
import { MasterportalComponent } from './Components/masterportal/masterportal.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    PortalComponent,
    OverlayComponent,
    DropdownComponent,
    MasteroverlayComponent,
    FormspopupComponent,
    LinklistComponent,
    ScrollComponent,
    MasterportalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OverlayModule,
    PortalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
