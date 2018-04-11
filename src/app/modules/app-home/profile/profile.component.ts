import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  profileData = [
    {
      title: 'Eze Software India Pvt. Ltd.',
      subtitle: 'Software Engineer, Since Dec. 2016',
      location: 'Hyderabad, India',
      content: 'gagrgaqgtwasgaujysrukkkkkkkkkkkkkjajuhahjusssssujir7ijjji64wjijuygt',
      imageUrl: 'http://localhost:4200/assets/eze.jpg'
    },
    {
      title: 'Factset System India Pvt. Ltd.',
      subtitle: 'Software Engineer, July 2014 - Dec. 2016',
      location: 'Hyderabad, India',
      content: 'gagrgaqgtwasgaujysrukkkkkkkkkkkkkjajuhahjusssssujir7ijjji64wjijuygt',
      imageUrl: 'http://localhost:4200/assets/factset1.jpeg'
    },
    {
      title: 'Aptuz Technology Solutions',
      subtitle: 'Software Engineering Intern, Summer 2013',
      location: 'Hyderabad, India',
      content: 'gagrgaqgtwasgaujysrukkkkkkkkkkkkkjajuhahjusssssujir7ijjji64wjijuygt',
      imageUrl: 'http://localhost:4200/assets/aptuz2.png'
    },
    {
      title: 'National Institute Of Technology',
      subtitle: 'M.Tech in Computer Science, earned May 2014',
      location: 'Uttar Pradesh, India',
      content: 'gagrgaqgtwasgaujysrukkkkkkkkkkkkkjajuhahjusssssujir7ijjji64wjijuygt',
      imageUrl: 'http://localhost:4200/assets/nitwarangal.jpg'
    },
    {
      title: 'Uttar Pradesh Technical University',
      subtitle: 'B.Tech in Computer Science, earned May 2012',
      location: 'Uttar Pradesh, India',
      content: 'gagrgaqgtwasgaujysrukkkkkkkkkkkkkjajuhahjusssssujir7ijjji64wjijuygt',
      imageUrl: 'http://localhost:4200/assets/uptu.jpeg'
    },
  ]
}
