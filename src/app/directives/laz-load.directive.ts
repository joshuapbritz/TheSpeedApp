import {
  Directive,
  Output,
  ElementRef,
  AfterViewInit,
  EventEmitter,
  TemplateRef,
  HostBinding,
  Input,
  HostListener,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: 'img[speedLazyLoad]',
})
export class LazLoadDirective implements AfterViewInit {
  @HostBinding('attr.src')
  public src = null;

  // tslint:disable-next-line:no-input-rename
  @Input('src')
  public srcPath: string;

  public parent: HTMLElement;

  constructor(private element: ElementRef<HTMLElement>) {}

  public ngAfterViewInit() {
    this.parent = this.element.nativeElement.parentElement;
    this.parent.style.height = 250 + 'px';
    this.parent.style.backgroundColor = '#dbdbdb';
  }

  @HostListener('window:scroll')
  public windowscroll() {
    const { top } = this.element.nativeElement.getBoundingClientRect();
    if (top < window.innerHeight + 100) {
      const _img = new Image();

      _img.onload = () => {
        this.src = _img.src;
      };

      _img.src = this.srcPath;
    }
  }
}
