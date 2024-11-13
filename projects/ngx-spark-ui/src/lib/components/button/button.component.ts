import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { ButtonType } from '../../types/button.type';
import { cn } from '../../utils/cn.utils';

import {
  BUTTON_SIZES,
  BUTTON_VARIANTS,
  ButtonSize,
  ButtonVariant,
} from './button-variants';

@Component({
  selector: 'spark-button',
  standalone: true,
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  type = input<ButtonType>('button');
  className = input<string>('');
  label = input<string | undefined>();
  variant = input<ButtonVariant>('default');
  size = input<ButtonSize>('default');
  disabled = input<boolean>(false);

  protected readonly cn = cn;

  get buttonClasses(): string {
    const variantClass =
      BUTTON_VARIANTS[this.variant()] || BUTTON_VARIANTS['default'];
    const sizeClass = BUTTON_SIZES[this.size()] || BUTTON_SIZES['default'];
    const baseClass =
      'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background';

    return `${baseClass} ${variantClass} ${sizeClass} ${this.disabled() ? 'opacity-50 cursor-not-allowed' : ''}`;
  }
}
