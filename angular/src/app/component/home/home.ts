import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  title = 'Welcome to My Website';
  subtitle = 'Building amazing things with Angular';

  features = [
    { icon: '🚀', title: 'Fast', description: 'Blazing fast performance' },
    { icon: '🔒', title: 'Secure', description: 'Built with security in mind' },
    { icon: '📱', title: 'Responsive', description: 'Works on all devices' }
  ];
}