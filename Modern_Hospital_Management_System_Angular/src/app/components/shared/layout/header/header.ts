import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
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
