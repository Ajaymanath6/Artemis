import { Directive, ElementRef, Input, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { ImageService } from '../services/image.service';

@Directive({
  selector: '[appImageLoader]',
  standalone: true
})
export class ImageLoaderDirective implements OnInit, OnDestroy {
  @Input() appImageLoader!: string;
  @Input() fallbackImage = 'placeholder.svg';
  @Input() showLoader = true;
  @Input() altText = 'Image';

  private loaderElement?: HTMLElement;
  private originalDisplay = '';

  constructor(
    private el: ElementRef<HTMLImageElement>,
    private renderer: Renderer2,
    private imageService: ImageService
  ) {}

  ngOnInit(): void {
    const img = this.el.nativeElement;

    // Store original display style
    this.originalDisplay = img.style.display || '';

    // Add loading state
    if (this.showLoader) {
      this.createLoader();
    }

    // Set initial image source
    const imageUrl = this.imageService.getImageUrl(this.appImageLoader);
    this.renderer.setAttribute(img, 'src', imageUrl);
    this.renderer.setAttribute(img, 'alt', this.altText);

    // Add error handling
    this.renderer.listen(img, 'load', () => {
      this.removeLoader();
    });

    this.renderer.listen(img, 'error', (event: Event) => {
      this.handleImageError(event);
    });
  }

  ngOnDestroy(): void {
    this.removeLoader();
  }

  private createLoader(): void {
    const img = this.el.nativeElement;
    const parent = img.parentElement;

    if (!parent) return;

    // Hide original image
    this.renderer.setStyle(img, 'display', 'none');

    // Create loader
    this.loaderElement = this.renderer.createElement('div');
    this.renderer.addClass(this.loaderElement, 'image-loader');
    this.renderer.setStyle(this.loaderElement, 'display', 'flex');
    this.renderer.setStyle(this.loaderElement, 'align-items', 'center');
    this.renderer.setStyle(this.loaderElement, 'justify-content', 'center');
    this.renderer.setStyle(this.loaderElement, 'width', img.offsetWidth + 'px');
    this.renderer.setStyle(this.loaderElement, 'height', img.offsetHeight + 'px');
    this.renderer.setStyle(this.loaderElement, 'background-color', '#f3f4f6');
    this.renderer.setStyle(this.loaderElement, 'border-radius', '4px');

    // Add spinner
    const spinner = this.renderer.createElement('div');
    this.renderer.addClass(spinner, 'animate-spin');
    this.renderer.setStyle(spinner, 'width', '24px');
    this.renderer.setStyle(spinner, 'height', '24px');
    this.renderer.setStyle(spinner, 'border', '2px solid #d1d5db');
    this.renderer.setStyle(spinner, 'border-top', '2px solid #3b82f6');
    this.renderer.setStyle(spinner, 'border-radius', '50%');

    this.renderer.appendChild(this.loaderElement, spinner);
    this.renderer.insertBefore(parent, this.loaderElement, img);
  }

  private removeLoader(): void {
    if (this.loaderElement) {
      this.renderer.removeChild(this.loaderElement.parentElement, this.loaderElement);
      this.loaderElement = undefined;
    }

    // Show original image
    const img = this.el.nativeElement;
    this.renderer.setStyle(img, 'display', this.originalDisplay || 'block');
  }

  private handleImageError(event: Event): void {
    const img = event.target as HTMLImageElement;

    // Try fallback image
    if (img.src !== this.imageService.getImageUrl(this.fallbackImage)) {
      const fallbackUrl = this.imageService.getImageUrl(this.fallbackImage);
      this.renderer.setAttribute(img, 'src', fallbackUrl);
      return;
    }

    // If fallback also fails, show error state
    console.error('Image failed to load:', this.appImageLoader);

    // Create error placeholder
    const parent = img.parentElement;
    if (parent) {
      const errorDiv = this.renderer.createElement('div');
      this.renderer.addClass(errorDiv, 'image-error');
      this.renderer.setStyle(errorDiv, 'display', 'flex');
      this.renderer.setStyle(errorDiv, 'align-items', 'center');
      this.renderer.setStyle(errorDiv, 'justify-content', 'center');
      this.renderer.setStyle(errorDiv, 'width', img.offsetWidth + 'px');
      this.renderer.setStyle(errorDiv, 'height', img.offsetHeight + 'px');
      this.renderer.setStyle(errorDiv, 'background-color', '#fef2f2');
      this.renderer.setStyle(errorDiv, 'border', '1px solid #fecaca');
      this.renderer.setStyle(errorDiv, 'border-radius', '4px');
      this.renderer.setStyle(errorDiv, 'color', '#dc2626');

      const errorText = this.renderer.createText('Image failed to load');
      this.renderer.appendChild(errorDiv, errorText);

      this.renderer.insertBefore(parent, errorDiv, img);
      this.renderer.setStyle(img, 'display', 'none');
    }

    this.removeLoader();
  }
}
