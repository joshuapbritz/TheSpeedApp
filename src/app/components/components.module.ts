import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { ScrollDownComponent } from './scroll-down/scroll-down.component';
import { GalleryComponent } from './gallery/gallery.component';
import { LazLoadDirective } from '../directives/laz-load.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [HeroBannerComponent, ScrollDownComponent, GalleryComponent, LazLoadDirective],
  exports: [HeroBannerComponent, ScrollDownComponent, GalleryComponent, LazLoadDirective],
})
export class ComponentsModule {}
