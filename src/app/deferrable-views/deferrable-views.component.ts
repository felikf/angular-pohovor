import { Component, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-deferrable-views',
  standalone: true,
  imports: [AsyncPipe, HttpClientModule, JsonPipe],
  templateUrl: './deferrable-views.component.html',
  styleUrl: './deferrable-views.component.scss',
})
export class DeferrableViewsComponent {
  todos$ = inject(HttpClient).get(
    'https://jsonplaceholder.typicode.com/comments',
  );
}
