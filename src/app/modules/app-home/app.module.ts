import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';

import { AppRoutingModule } from "./app.routing";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FlexLayoutModule } from '@angular/flex-layout';
import { CustomMaterialModule } from "./material.module";
import { FloatButtonModule } from "../floating-button/float-button.module";

import { AppComponent } from "./app.component";
import { OverlayComponent } from "./overlay/overlay.component";
import { SideNavComponent } from "./side-nav/side-nav.component";
import { ProfileComponent } from "./profile/profile.component";
import { ContactComponent } from "./contact/contact.component";
import { PhotographyComponent } from "./photography/photography.component";
import { ImagedlgComponent } from "../img-dialog/imagedlg.component";
import { CarouselComponent, CarouselItemElement } from "../carousel/carousel.component";
import { CarouselItemDirective } from "../carousel/carousel-item.directive";


@NgModule({
  declarations: [
    AppComponent,
    OverlayComponent,
    SideNavComponent,
    ProfileComponent,
    ContactComponent,
    PhotographyComponent,
    ImagedlgComponent,
    CarouselComponent,
    CarouselItemDirective,
    CarouselItemElement
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    CustomMaterialModule,
    FloatButtonModule,
    //The order of route configuration matters.
    AppRoutingModule
  ],
  entryComponents: [ImagedlgComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
