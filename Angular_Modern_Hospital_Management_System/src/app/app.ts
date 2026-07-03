import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/shared/layout/header/header';
import { Footer } from './components/shared/layout/footer/footer';
import { Sidebar } from './components/shared/layout/sidebar/sidebar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer, Sidebar],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'medcore-hms';
}

export { AppComponent };