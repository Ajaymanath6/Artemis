# Image Handling Guide for Angular Applications

This guide provides comprehensive best practices for handling images, SVGs, and media assets in Angular applications.

## 📁 Asset Organization

### Directory Structure
```
src/assets/
├── images/
│   ├── logos/          # Brand logos and icons
│   ├── icons/          # UI icons and symbols
│   ├── photos/         # User photos and content images
│   └── placeholders/   # Fallback and placeholder images
├── fonts/              # Custom font files
└── media/              # Videos, audio, and other media
```

### File Naming Convention
- Use kebab-case: `user-profile-avatar.png`
- Include size for multiple versions: `logo-32x32.png`, `logo-64x64.png`
- Use descriptive names: `case-document-preview.jpg`

## 🖼️ Image Implementation Methods

### 1. Standard HTML `<img>` Tag
```html
<!-- Basic usage -->
<img src="/assets/images/logo.svg" alt="Company Logo" class="h-8 w-auto" />

<!-- With Angular binding -->
<img [src]="imageUrl" [alt]="altText" class="h-8 w-auto" />
```

### 2. Using Image Service (Recommended)
```typescript
// In component
constructor(private imageService: ImageService) {}

ngOnInit() {
  this.logoUrl = this.imageService.getImageUrl('logo.svg');
}
```
```html
<img [src]="logoUrl" alt="Logo" class="h-8 w-auto" />
```

### 3. Using Image Loader Directive (Best Practice)
```html
<img appImageLoader="logo.svg"
     fallbackImage="placeholder.svg"
     altText="Company Logo"
     class="h-8 w-auto" />
```

### 4. Lazy Loading with Intersection Observer
```typescript
private lazyLoadImage(image: HTMLImageElement, src: string): void {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        image.src = src;
        observer.unobserve(image);
      }
    });
  }, ImageUtils.getLazyLoadingConfig());

  observer.observe(image);
}
```

## 🎨 SVG Handling Best Practices

### Method 1: External SVG Files (Recommended)
```html
<!-- Using img tag -->
<img src="/assets/images/icon.svg" alt="Icon" class="h-6 w-6" />

<!-- Using Angular binding -->
<img [src]="iconService.getIconUrl('search')" alt="Search" class="h-6 w-6" />
```

### Method 2: Inline SVG (For frequently used icons)
```typescript
// Preload and cache SVG content
async getSvgIcon(name: string): Promise<string> {
  if (!this.svgCache[name]) {
    this.svgCache[name] = await this.imageService.getSvgContent(`${name}.svg`);
  }
  return this.svgCache[name];
}
```
```html
<div [innerHTML]="svgContent" class="h-6 w-6"></div>
```

### Method 3: SVG Sprite
```html
<!-- Define sprite in index.html -->
<svg style="display: none;">
  <defs>
    <symbol id="icon-search" viewBox="0 0 24 24">
      <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
    </symbol>
  </defs>
</svg>

<!-- Use in components -->
<svg class="h-6 w-6">
  <use href="#icon-search"></use>
</svg>
```

## ⚡ Performance Optimization

### 1. Image Optimization
```typescript
// Use modern formats when possible
const optimizedUrl = ImageUtils.getOptimalFormat('image.jpg');
// Returns: 'image.webp' if supported, otherwise 'image.jpg'
```

### 2. Responsive Images
```html
<!-- Using srcSet -->
<img src="/assets/images/logo-small.png"
     srcset="/assets/images/logo-medium.png 768w,
             /assets/images/logo-large.png 1024w"
     sizes="(max-width: 768px) 100vw, 50vw"
     alt="Responsive Logo" />

<!-- Using utility function -->
<img [srcSet]="ImageUtils.generateSrcSet('logo')"
     [sizes]="ImageUtils.generateSizes()"
     alt="Logo" />
```

### 3. Lazy Loading
```typescript
// Implement lazy loading
ngAfterViewInit() {
  const images = this.elementRef.nativeElement.querySelectorAll('img[data-src]');

  images.forEach((img: HTMLImageElement) => {
    this.lazyLoadImage(img, img.dataset['src']!);
  });
}
```

### 4. Preloading Critical Images
```typescript
async ngOnInit() {
  // Preload critical images
  await ImageUtils.preloadImages([
    '/assets/images/logo.svg',
    '/assets/images/user-avatar-placeholder.svg'
  ]);
}
```

## 🛡️ Error Handling & Fallbacks

### 1. Image Error Handling
```html
<img src="/assets/images/logo.svg"
     alt="Logo"
     (error)="onImageError($event)"
     class="h-8 w-auto" />
```
```typescript
onImageError(event: Event): void {
  const img = event.target as HTMLImageElement;
  img.src = '/assets/images/placeholder.svg';
}
```

### 2. Using Image Loader Directive
```html
<img appImageLoader="logo.svg"
     fallbackImage="placeholder.svg"
     showLoader="true"
     altText="Logo"
     class="h-8 w-auto" />
```

### 3. Progressive Loading
```typescript
// Load low-quality placeholder first
loadProgressiveImage(): void {
  const placeholder = ImageUtils.generateBlurPlaceholder(400, 300);
  this.imageUrl = placeholder;

  // Then load actual image
  setTimeout(() => {
    this.imageUrl = '/assets/images/actual-image.jpg';
  }, 100);
}
```

## 📱 Responsive Images

### 1. CSS-Based Responsive Images
```css
.logo {
  width: 120px;
  height: 48px;
}

@media (max-width: 768px) {
  .logo {
    width: 96px;
    height: 38px;
  }
}

@media (max-width: 480px) {
  .logo {
    width: 72px;
    height: 29px;
  }
}
```

### 2. Using Tailwind Responsive Classes
```html
<img src="/assets/images/logo.svg"
     alt="Logo"
     class="h-12 md:h-10 lg:h-8 xl:h-6 w-auto" />
```

### 3. Picture Element for Art Direction
```html
<picture>
  <source media="(min-width: 1024px)" srcset="/assets/images/logo-large.svg">
  <source media="(min-width: 768px)" srcset="/assets/images/logo-medium.svg">
  <img src="/assets/images/logo-small.svg" alt="Logo">
</picture>
```

## 🔧 Build Configuration

### 1. Angular Asset Configuration
```json
// angular.json
{
  "assets": [
    {
      "glob": "**/*",
      "input": "src/assets",
      "output": "/assets/"
    },
    {
      "glob": "**/*",
      "input": "public",
      "output": "/"
    }
  ]
}
```

### 2. Image Optimization in Build
```javascript
// webpack.config.js (for custom optimization)
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/images',
              name: '[name].[hash].[ext]'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: { quality: 75 },
              pngquant: { quality: [0.65, 0.90] },
              gifsicle: { interlaced: false },
              webp: { quality: 75 }
            }
          }
        ]
      }
    ]
  }
};
```

## 🎨 SVG Optimization

### 1. SVG Optimization Tools
```bash
# Using SVGO
svgo input.svg -o output.svg

# Using online tools
# https://jakearchibald.github.io/svgomg/
# https://svgoptimizer.com/
```

### 2. SVG Sprites for Icon Systems
```html
<!-- icons.svg -->
<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
  <symbol id="icon-home" viewBox="0 0 24 24">
    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
  </symbol>
</svg>

<!-- Usage -->
<svg class="h-6 w-6">
  <use href="/assets/images/icons.svg#icon-home"></use>
</svg>
```

## 🔍 Image Accessibility

### 1. Alt Text Best Practices
```html
<!-- Good alt text -->
<img src="/assets/images/user-avatar.jpg" alt="John Doe, Senior Attorney" />

<!-- Decorative images -->
<img src="/assets/images/decoration.png" alt="" aria-hidden="true" />

<!-- Icons with context -->
<img src="/assets/images/search-icon.svg" alt="Search" />
```

### 2. ARIA Labels for Complex Images
```html
<img src="/assets/images/chart.png"
     alt="Monthly case filing statistics showing 25% increase"
     role="img"
     aria-describedby="chart-description" />

<div id="chart-description" class="sr-only">
  Bar chart displaying case filings from January to December.
  Peak filing month is October with 450 cases.
</div>
```

## 🚀 Advanced Features

### 1. Image Preloading Strategy
```typescript
@Injectable({
  providedIn: 'root'
})
export class ImagePreloaderService {
  private preloadedImages = new Set<string>();

  preloadCriticalImages(): Promise<void[]> {
    const criticalImages = [
      '/assets/images/logo.svg',
      '/assets/images/avatar-placeholder.svg'
    ];

    return ImageUtils.preloadImages(criticalImages);
  }

  preloadOnDemand(imageUrl: string): Promise<void> {
    if (this.preloadedImages.has(imageUrl)) {
      return Promise.resolve();
    }

    return ImageUtils.preloadImages([imageUrl]).then(() => {
      this.preloadedImages.add(imageUrl);
    });
  }
}
```

### 2. Image Caching Strategy
```typescript
@Injectable({
  providedIn: 'root'
})
export class ImageCacheService {
  private cache = new Map<string, string>();

  async getCachedImage(url: string): Promise<string> {
    if (this.cache.has(url)) {
      return this.cache.get(url)!;
    }

    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const objectUrl = URL.createObjectURL(blob);

      this.cache.set(url, objectUrl);
      return objectUrl;
    } catch (error) {
      throw new Error(`Failed to cache image: ${url}`);
    }
  }
}
```

## 📊 Monitoring & Analytics

### 1. Image Loading Performance
```typescript
// Track image loading performance
trackImageLoad(image: HTMLImageElement): void {
  const startTime = performance.now();

  image.addEventListener('load', () => {
    const loadTime = performance.now() - startTime;
    console.log(`Image loaded in ${loadTime}ms: ${image.src}`);

    // Send to analytics
    this.analytics.track('image_load', {
      url: image.src,
      loadTime,
      size: image.naturalWidth * image.naturalHeight
    });
  });
}
```

### 2. Error Tracking
```typescript
// Track image load failures
trackImageError(image: HTMLImageElement): void {
  console.error(`Image failed to load: ${image.src}`);

  this.analytics.track('image_error', {
    url: image.src,
    userAgent: navigator.userAgent,
    timestamp: new Date().toISOString()
  });
}
```

## 🔧 Troubleshooting Common Issues

### 1. SVG Not Displaying
```typescript
// Check if SVG is accessible
async debugSvg(svgPath: string): Promise<void> {
  const isAccessible = await ImageUtils.isImageAccessible(svgPath);
  console.log(`SVG accessible: ${isAccessible}`);

  if (!isAccessible) {
    console.error('SVG file not found or not accessible');
  }
}
```

### 2. CORS Issues
```typescript
// Handle CORS for external images
loadExternalImage(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(url);
    img.onerror = () => reject(new Error('Failed to load external image'));
    img.src = url;
  });
}
```

### 3. Memory Leaks
```typescript
// Clean up object URLs to prevent memory leaks
cleanupObjectUrl(url: string): void {
  if (url.startsWith('blob:')) {
    URL.revokeObjectURL(url);
  }
}
```

## 📚 Best Practices Summary

1. **Use Image Service** for centralized image handling
2. **Implement error handling** with fallback images
3. **Use lazy loading** for better performance
4. **Optimize images** before deployment
5. **Provide alt text** for accessibility
6. **Use responsive images** for different screen sizes
7. **Cache frequently used images**
8. **Monitor loading performance**
9. **Handle CORS properly** for external images
10. **Clean up resources** to prevent memory leaks

This comprehensive guide ensures your Angular application handles images efficiently, accessibly, and with excellent user experience.
