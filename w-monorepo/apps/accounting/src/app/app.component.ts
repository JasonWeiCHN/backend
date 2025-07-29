import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  imports: [RouterModule, HttpClientModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  current: 'card' | 'form' | 'list' = 'card';

  constructor(private router: Router) {}

  ngOnInit(): void {
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');

    if (token) {
      localStorage.setItem('token', token);
      const cleanUrl = window.location.origin + window.location.pathname;
      window.history.replaceState({}, document.title, cleanUrl);
    }

    this.setCurrentTab();
    this.router.events.subscribe(() => this.setCurrentTab());
  }

  navigateTo(type: 'card' | 'form' | 'list') {
    this.current = type;
    const routeMap = {
      card: '/accounting-card',
      form: '/accounting/new',
      list: '/accounting-list',
    };
    this.router.navigate([routeMap[type]]);
  }

  setCurrentTab() {
    const url = this.router.url;
    if (
      url.startsWith('/accounting/new') ||
      url.startsWith('/accounting/edit')
    ) {
      this.current = 'form';
    } else if (url.startsWith('/accounting-list')) {
      this.current = 'list';
    } else {
      this.current = 'card';
    }
  }
}
