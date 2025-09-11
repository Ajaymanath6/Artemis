/**
 * Image Utilities for Angular Applications
 * Best practices for handling images, SVGs, and media assets
 */

export class ImageUtils {

  /**
   * Generate responsive image srcsets for different screen sizes
   * @param baseImageName - Base image name without extension
   * @param extension - Image extension (default: 'webp')
   * @param sizes - Array of size descriptors
   */
  static generateSrcSet(
    baseImageName: string,
    extension: string = 'webp',
    sizes: Array<{ width: number; descriptor: string }> = [
      { width: 480, descriptor: '480w' },
      { width: 768, descriptor: '768w' },
      { width: 1024, descriptor: '1024w' },
      { width: 1280, descriptor: '1280w' }
    ]
  ): string {
    return sizes
      .map(size => `/assets/images/${baseImageName}-${size.width}.${extension} ${size.descriptor}`)
      .join(', ');
  }

  /**
   * Generate responsive image sizes attribute
   * @param breakpoints - Responsive breakpoints
   */
  static generateSizes(
    breakpoints: Array<{ media: string; size: string }> = [
      { media: '(max-width: 480px)', size: '480px' },
      { media: '(max-width: 768px)', size: '768px' },
      { media: '(max-width: 1024px)', size: '1024px' },
      { media: '(min-width: 1025px)', size: '1280px' }
    ]
  ): string {
    return breakpoints
      .map(bp => `${bp.media} ${bp.size}`)
      .join(', ');
  }

  /**
   * Validate image file extensions
   * @param filename - Image filename
   */
  static isValidImageFile(filename: string): boolean {
    const validExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.avif'];
    const extension = filename.toLowerCase().substring(filename.lastIndexOf('.'));
    return validExtensions.includes(extension);
  }

  /**
   * Get optimal image format based on browser support
   * @param filename - Original filename
   */
  static getOptimalFormat(filename: string): string {
    const extension = filename.toLowerCase().substring(filename.lastIndexOf('.'));

    // Check for modern format support
    if (this.supportsWebP()) {
      return filename.replace(extension, '.webp');
    }

    if (this.supportsAvif()) {
      return filename.replace(extension, '.avif');
    }

    return filename;
  }

  /**
   * Check WebP support
   */
  private static supportsWebP(): boolean {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/webp').indexOf('webp') > -1;
  }

  /**
   * Check AVIF support
   */
  private static supportsAvif(): boolean {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/avif').indexOf('avif') > -1;
  }

  /**
   * Generate blur placeholder (data URL)
   * @param width - Image width
   * @param height - Image height
   * @param color - Background color (default: light gray)
   */
  static generateBlurPlaceholder(width: number, height: number, color: string = '#f3f4f6'): string {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    if (ctx) {
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, width, height);

      // Add subtle pattern
      ctx.fillStyle = this.adjustColor(color, -10);
      for (let i = 0; i < width; i += 20) {
        for (let j = 0; j < height; j += 20) {
          if ((i + j) % 40 === 0) {
            ctx.fillRect(i, j, 10, 10);
          }
        }
      }
    }

    return canvas.toDataURL('image/jpeg', 0.1);
  }

  /**
   * Adjust color brightness
   * @param color - Hex color
   * @param amount - Amount to adjust (-100 to 100)
   */
  private static adjustColor(color: string, amount: number): string {
    const usePound = color[0] === '#';
    const col = usePound ? color.slice(1) : color;

    const num = parseInt(col, 16);
    let r = (num >> 16) + amount;
    let g = (num >> 8 & 0x00FF) + amount;
    let b = (num & 0x0000FF) + amount;

    r = r > 255 ? 255 : r < 0 ? 0 : r;
    g = g > 255 ? 255 : g < 0 ? 0 : g;
    b = b > 255 ? 255 : b < 0 ? 0 : b;

    return (usePound ? '#' : '') + (r << 16 | g << 8 | b).toString(16);
  }

  /**
   * Preload images for better performance
   * @param images - Array of image URLs to preload
   */
  static preloadImages(images: string[]): Promise<void[]> {
    const promises = images.map(url => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => reject(new Error(`Failed to preload: ${url}`));
        img.src = url;
      });
    });

    return Promise.all(promises);
  }

  /**
   * Generate image optimization parameters for CDN
   * @param options - Optimization options
   */
  static generateOptimizationParams(options: {
    width?: number;
    height?: number;
    quality?: number;
    format?: 'webp' | 'avif' | 'jpg' | 'png';
    fit?: 'cover' | 'contain' | 'fill' | 'inside' | 'outside';
  }): string {
    const params: string[] = [];

    if (options.width) params.push(`w=${options.width}`);
    if (options.height) params.push(`h=${options.height}`);
    if (options.quality) params.push(`q=${options.quality}`);
    if (options.format) params.push(`f=${options.format}`);
    if (options.fit) params.push(`fit=${options.fit}`);

    return params.join('&');
  }

  /**
   * Sanitize image filename for URL safety
   * @param filename - Original filename
   */
  static sanitizeFilename(filename: string): string {
    return filename
      .toLowerCase()
      .replace(/[^a-z0-9\-_.]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
  }

  /**
   * Get image dimensions
   * @param url - Image URL
   */
  static getImageDimensions(url: string): Promise<{ width: number; height: number }> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        resolve({
          width: img.naturalWidth,
          height: img.naturalHeight
        });
      };
      img.onerror = () => reject(new Error('Failed to load image'));
      img.src = url;
    });
  }

  /**
   * Check if image is accessible
   * @param url - Image URL
   */
  static async isImageAccessible(url: string): Promise<boolean> {
    try {
      const response = await fetch(url, { method: 'HEAD' });
      return response.ok;
    } catch {
      return false;
    }
  }

  /**
   * Generate image lazy loading configuration
   */
  static getLazyLoadingConfig(): IntersectionObserverInit {
    return {
      root: null,
      rootMargin: '50px',
      threshold: 0.1
    };
  }

  /**
   * Format file size for display
   * @param bytes - File size in bytes
   */
  static formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 B';

    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  }
}
