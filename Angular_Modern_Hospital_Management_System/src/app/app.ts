import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/shared/layout/header/header';
import { SidebarComponent } from './components/shared/layout/sidebar/sidebar';
import { FooterComponent } from './components/shared/layout/footer/footer';
import { HomeComponent } from './components/shared/layout/home/home';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'medcore-hms';
}