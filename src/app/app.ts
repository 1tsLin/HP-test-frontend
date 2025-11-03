import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { IncidentsStats } from './incidents-stats/incidents-stats';
import { Vulnerabilities } from './vulnerabilities/vulnerabilities';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, IncidentsStats, Vulnerabilities],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('HP-test');
}
