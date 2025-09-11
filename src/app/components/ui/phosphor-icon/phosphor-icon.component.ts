import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as icons from '@phosphor-icons/core';

@Component({
  selector: 'app-phosphor-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <svg
      [attr.width]="size"
      [attr.height]="size"
      viewBox="0 0 256 256"
      [attr.fill]="fill"
      [attr.stroke]="stroke"
      [class]="className"
      [attr.aria-label]="ariaLabel"
      role="img"
      [innerHTML]="iconSvg">
    </svg>
  `,
  styleUrls: ['./phosphor-icon.component.css']
})
export class PhosphorIconComponent implements OnInit, OnChanges {
  @Input() name: string = '';
  @Input() size: number = 24;
  @Input() weight: 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone' = 'regular';
  @Input() color: string = 'currentColor';
  @Input() className: string = '';
  @Input() ariaLabel?: string;

  iconSvg: string = '';
  fill: string = 'none';
  stroke: string = 'currentColor';

  ngOnInit() {
    this.updateIcon();
  }

  ngOnChanges() {
    this.updateIcon();
  }

  private updateIcon() {
    if (!this.name) return;

    try {
      // Convert kebab-case to camelCase for icon name
      const iconKey = this.name
        .replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());

      // Type-safe icon function lookup
      let iconFunction: ((color?: string) => string) | undefined;

      // Use type assertion for dynamic property access
      const iconsAny = icons as any;

      switch (this.weight) {
        case 'thin':
          iconFunction = iconsAny[`${iconKey}Thin`];
          break;
        case 'light':
          iconFunction = iconsAny[`${iconKey}Light`];
          break;
        case 'regular':
          iconFunction = iconsAny[`${iconKey}Regular`] || iconsAny[`${iconKey}`];
          break;
        case 'bold':
          iconFunction = iconsAny[`${iconKey}Bold`];
          break;
        case 'fill':
          iconFunction = iconsAny[`${iconKey}Fill`];
          break;
        case 'duotone':
          iconFunction = iconsAny[`${iconKey}Duotone`];
          break;
        default:
          iconFunction = iconsAny[`${iconKey}Regular`] || iconsAny[`${iconKey}`];
      }

      if (iconFunction && typeof iconFunction === 'function') {
        this.iconSvg = iconFunction(this.color);
      }

      // Set fill/stroke based on weight
      if (this.weight === 'fill' || this.weight === 'duotone') {
        this.fill = this.color;
        this.stroke = 'none';
      } else {
        this.fill = 'none';
        this.stroke = this.color;
      }
    } catch (error) {
      console.warn(`Phosphor icon "${this.name}" not found`);
      this.iconSvg = '';
    }
  }
}
