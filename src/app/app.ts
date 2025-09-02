import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Landing } from "./landing/landing";
import { Services } from './services/services';
import { AboutUs } from './about-us/about-us';
import { Credibility } from './credibility/credibility';
import { BeforeAfter } from './before-after/before-after';
import { Reviews } from './reviews/reviews';
import { Contact } from './contact/contact';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Landing, Services, AboutUs, Credibility, BeforeAfter, Reviews, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pinnacleEdge');
}
