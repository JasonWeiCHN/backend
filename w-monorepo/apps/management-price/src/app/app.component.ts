import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GoodComponent } from './pages/good/good.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  imports: [RouterModule, GoodComponent, HttpClientModule],
  selector: 'm-price-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'management-price';
}
