import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface NavItem {
  label: string;
  icon: string;
  route: string;
  badge?: number;
}

interface NavSection {
  label: string;
  items: NavItem[];
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css']
})
export class Sidebar {

  // collapsed = false;

  // navSections: NavSection[] = [
  //   {
  //     label: 'Overview',
  //     items: [
  //       { label: 'Dashboard', icon: 'bi-grid-1x2', route: '/dashboard' }
  //     ]
  //   },
  //   {
  //     label: 'Care',
  //     items: [
  //       { label: 'Patients', icon: 'bi-people', route: '/patients' },
  //       { label: 'Appointments', icon: 'bi-calendar-check', route: '/appointments', badge: 8 },
  //       { label: 'Doctors', icon: 'bi-heart-pulse', route: '/doctors' },
  //       { label: 'Wards & Beds', icon: 'bi-hospital', route: '/wards' }
  //     ]
  //   },
  //   {
  //     label: 'Operations',
  //     items: [
  //       { label: 'Pharmacy', icon: 'bi-capsule', route: '/pharmacy' },
  //       { label: 'Laboratory', icon: 'bi-clipboard2-pulse', route: '/laboratory' },
  //       { label: 'Billing', icon: 'bi-receipt', route: '/billing' },
  //       { label: 'Reports', icon: 'bi-bar-chart-line', route: '/reports' }
  //     ]
  //   }
  // ];

  // toggleCollapse(): void {
  //   this.collapsed = !this.collapsed;
  // }
}