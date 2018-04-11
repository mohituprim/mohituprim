import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  @Output() onClose = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  closeSideNav(){
    this.onClose.emit(true);
  }
  intro = [
    {
      name: 'Software Engineer at',
      icon: 'work',
      link: 'EzeSoftware'
    },
    {
      name: 'Former Software Engineer at',
      icon: 'work',
      link: 'Factset'
    },
    {
      name: 'Studied at',
      icon: 'school',
      link: 'National Institute of Technology, Warangal',
    },
    {
      name: 'Lives in',
      icon: 'location_city',
      link: 'Hyderabad, India'
    },
    {
      name: 'From',
      icon: 'place',
      link: 'Jhansi, India'
    },
        {
      name: 'Knows Hindi, English',
      icon: 'language',
      link: ''
    }
  ];
  sidenavlink = [
    {
      name: 'Home',
      icon: 'home',
      link: 'home'
    },
    {
      name: 'Profile',
      icon: 'account_box',
      link: 'profile'
    },
    {
      name: 'Photography',
      icon: 'photo_camera',
      link: 'photography'
    }
    ,
    {
      name: 'Contact',
      icon: 'contact_mail',
      link: 'contact',
    }
  ];
}
