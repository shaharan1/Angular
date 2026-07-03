import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
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