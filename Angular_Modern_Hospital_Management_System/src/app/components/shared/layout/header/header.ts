import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  pageTitle = 'Dashboard';
  currentDate = new Date();

  notificationsCount = 5;
  messagesCount = 2;

  currentUser = {
    name: 'Dr. Sarah Reynolds',
    role: 'Chief Attending Physician',
    avatarInitials: 'SR'
  };

  isProfileMenuOpen = false;

  toggleProfileMenu(): void {
    this.isProfileMenuOpen = !this.isProfileMenuOpen;
  }

  closeProfileMenu(): void {
    this.isProfileMenuOpen = false;
  }
}