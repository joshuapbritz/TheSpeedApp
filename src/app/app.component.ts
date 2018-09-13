import { Component } from '@angular/core';

@Component({
  selector: 'speed-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public images: string[] = [
    'assets/gallery/one.jpeg',
    'assets/gallery/two.jpeg',
    'assets/gallery/three.jpeg',
    'assets/gallery/four.jpeg',
    'assets/gallery/five.jpeg',
    'assets/gallery/six.jpeg',
    'assets/gallery/seven.jpeg',
    'assets/gallery/eight.jpeg',
    'assets/gallery/nine.jpeg',
    'assets/gallery/ten.jpeg',
  ];

  constructor() {}
}
