import { Component, ViewChild, Renderer, ElementRef } from '@angular/core';
import { MatSidenav } from "@angular/material/sidenav";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: MatSidenav;
  @ViewChild('container') container:Element;
  
  constructor(private router: Router, private route: ActivatedRoute, 
    private renderer:Renderer, private elref:ElementRef) {}
  ngOnInit() {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe(_ => {
          // if(_['url']=='/home'|| _['url']=='/'){
            let childRouteSnapshot = this.route.snapshot;

            let url = childRouteSnapshot.firstChild.data['imageUrl'];
            this.renderer.setElementStyle(this.elref.nativeElement.childNodes[0],
              'background-image', 'url(' + url + ')');
          // }
          // else{
          //   this.renderer.setElementStyle(this.elref.nativeElement.childNodes[0],
          //   'background-image', 'none');
          // }
      })
  }

  title = 'app';
  onClose(closeS:boolean) {
      this.sidenav.close();
    }
}
