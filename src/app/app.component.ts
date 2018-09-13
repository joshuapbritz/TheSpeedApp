import { Component } from '@angular/core';

@Component({
  selector: 'speed-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public images: string[] = [
    'assets/gallery/one.webp',
    'assets/gallery/two.webp',
    'assets/gallery/three.webp',
    'assets/gallery/four.webp',
    'assets/gallery/five.webp',
    'assets/gallery/six.webp',
    'assets/gallery/seven.webp',
    'assets/gallery/eight.webp',
    'assets/gallery/nine.webp',
    'assets/gallery/ten.webp',
  ];

  constructor() {}
}
