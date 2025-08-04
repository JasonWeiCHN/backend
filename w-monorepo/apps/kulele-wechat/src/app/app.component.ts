import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  current: 'config' | 'games' = 'config';

  constructor(private router: Router) {}

  navigateTo(type: 'config' | 'games') {
    this.current = type;
    const routeMap = {
      config: '/config',
      games: '/games',
    };
    this.router.navigate([routeMap[type]]);
  }

  ngOnInit(): void {
    this.setCurrentTab();
    this.router.events.subscribe(() => this.setCurrentTab());
  }

  setCurrentTab() {
    const url = this.router.url;
    if (url.startsWith('/config')) {
      this.current = 'config';
    } else {
      this.current = 'games';
    }
  }
}
