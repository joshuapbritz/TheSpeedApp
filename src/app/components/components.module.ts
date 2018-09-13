import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { ScrollDownComponent } from './scroll-down/scroll-down.component';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HeroBannerComponent, ScrollDownComponent, GalleryComponent],
  exports: [HeroBannerComponent, ScrollDownComponent, GalleryComponent],
})
export class ComponentsModule {}
