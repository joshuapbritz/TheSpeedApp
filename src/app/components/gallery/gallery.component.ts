import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'speed-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  @Input()
  public images: string[];

  constructor() {}

  ngOnInit() {}
}
