import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor() { }

  /**
   * Get the full asset path for images
   * @param imageName - The image filename with extension
   * @param folder - Subfolder in assets (default: 'images')
   */
  getAssetPath(imageName: string, folder: string = 'images'): string {
    return `/assets/${folder}/${imageName}`;
  }

  /**
   * Get image URL with error handling
   * @param imageName - The image filename with extension
   * @param folder - Subfolder in assets (default: 'images')
   */
  getImageUrl(imageName: string, folder: string = 'images'): string {
    try {
      return this.getAssetPath(imageName, folder);
    } catch (error) {
      console.error('Error loading image:', imageName, error);
      return this.getAssetPath('placeholder.svg', 'images');
    }
  }

  /**
   * Preload critical images
   * @param images - Array of image names to preload
   */
  preloadImages(images: string[]): Promise<void[]> {
    const promises = images.map(imageName => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve();
        img.onerror = () => reject(new Error(`Failed to load ${imageName}`));
        img.src = this.getImageUrl(imageName);
      });
    });

    return Promise.all(promises);
  }

  /**
   * Check if image exists
   * @param imageName - The image filename with extension
   * @param folder - Subfolder in assets (default: 'images')
   */
  imageExists(imageName: string, folder: string = 'images'): Promise<boolean> {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = this.getAssetPath(imageName, folder);
    });
  }

  /**
   * Get SVG content as string (for inline SVG usage)
   * @param svgName - The SVG filename
   */
  async getSvgContent(svgName: string): Promise<string> {
    try {
      const response = await fetch(this.getAssetPath(svgName, 'images'));
      if (!response.ok) {
        throw new Error(`Failed to load SVG: ${svgName}`);
      }
      return await response.text();
    } catch (error) {
      console.error('Error loading SVG content:', error);
      return '<svg width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#ccc"/></svg>';
    }
  }

  /**
   * Sanitize SVG content for safe inline usage
   * @param svgContent - Raw SVG string
   */
  sanitizeSvg(svgContent: string): string {
    // Remove potentially dangerous elements
    const dangerousElements = ['script', 'iframe', 'object', 'embed'];
    let sanitized = svgContent;

    dangerousElements.forEach(element => {
      const regex = new RegExp(`<${element}[^>]*>.*?</${element}>`, 'gi');
      sanitized = sanitized.replace(regex, '');
    });

    return sanitized;
  }
}
