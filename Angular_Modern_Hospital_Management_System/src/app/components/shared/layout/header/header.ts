import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {
  pageTitle = 'Dashboard';
  messagesCount = 2;
  notificationsCount = 5;
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