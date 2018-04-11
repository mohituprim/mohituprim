import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { AppComponent } from "./app.component";
import { OverlayComponent } from "./overlay/overlay.component";
import { ProfileComponent } from "./profile/profile.component";
import { ContactComponent } from "./contact/contact.component";
import { PhotographyComponent } from "./photography/photography.component";


const appRoutes: Routes = [
  { path: '', component: OverlayComponent, data:{ imageUrl: 'http://localhost:4200/assets/pangoglake.JPG'} },
  { path: 'home', component: OverlayComponent, data:{ imageUrl: 'http://localhost:4200/assets/pangoglake.JPG'} },
  { path: 'profile', component: ProfileComponent, data:{ imageUrl: 'http://localhost:4200/assets/nubra.JPG'} },
  { path: 'contact', component: ContactComponent, data:{ imageUrl: 'http://localhost:4200/assets/khardungla.JPG'}},
  { path: 'photography', component: PhotographyComponent, data:{ imageUrl: 'http://localhost:4200/assets/kheerganga.JPG'} },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
