import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {


currentYear = new Date().getFullYear();
  appVersion = 'v2.4.1';
  systemStatus: 'operational' | 'degraded' | 'down' = 'operational';

  quickLinks = [
    { label: 'Help Center', route: '/help' },
    { label: 'Privacy Policy', route: '/privacy' },
    { label: 'Terms of Use', route: '/terms' },
    { label: 'Compliance (HIPAA)', route: '/compliance' }
  ];

}
