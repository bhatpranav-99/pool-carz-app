import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookRideComponent } from './book-ride/book-ride.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BookRideComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'PoolCarzApplication';
}
