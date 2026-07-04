import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./components/shared/layout/footer/footer";
import { Header } from "./components/shared/layout/header/header";
import { Sidebar } from "./components/shared/layout/sidebar/sidebar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Header, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Modern_Hospital_Management_System_Angular');
}
