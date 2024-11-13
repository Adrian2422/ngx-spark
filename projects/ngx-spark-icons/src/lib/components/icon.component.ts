import {
  ChangeDetectionStrategy,
  Component,
  effect,
  ElementRef,
  inject,
  input,
} from '@angular/core';

import { IconName } from '../icon-name';
import { injectIcons } from '../providers';
import { mergeClassIntoSvg } from '../utils';

@Component({
  selector: 'spark-icon',
  standalone: true,
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  readonly name = input<IconName>();
  readonly svg = input<string>();
  readonly className = input<string>();

  private readonly icons = injectIcons();
  private el = inject<ElementRef<HTMLElement>>(ElementRef);

  constructor() {
    effect(() => this.updateIcon());
  }

  private updateIcon(): void {
    const name = this.name();
    const svg = this.svg();

    if (svg) {
      this.setSvg(svg);
      return;
    }

    if (!name) {
      return;
    }

    for (const icons of [...this.icons].reverse()) {
      if (icons[name]) {
        // insert the SVG into the template
        this.setSvg(icons[name]);
        return;
      }
    }
  }

  private setSvg(svg: string): void {
    const className = this.className();

    if (!className) {
      this.el.nativeElement.innerHTML = svg;
      return;
    }

    this.el.nativeElement.innerHTML = mergeClassIntoSvg(svg, className);
  }
}
