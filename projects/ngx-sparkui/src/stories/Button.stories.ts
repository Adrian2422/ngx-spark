import type {Meta, StoryObj} from '@storybook/angular';

import { ButtonComponent } from '../lib/components';
import {ButtonSize} from '../lib/components/button/button-variants';

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  argTypes: {
    variant: {
      control: "radio",
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link']
    },
    size: {
      control: "radio",
      options: ['default', 'sm', 'lg', 'icon']
    },
    type: {
      control: "radio",
      options: ['button', 'reset', 'submit']
    }
  }
};

export default meta;
type Story = StoryObj<ButtonComponent>;

export const Default: Story = {
  args: {
    label: "Default",
    variant: "default",
  }
}
export const Destructive: Story = {
  args: {
    label: "Destructive",
    variant: "destructive",
  }
}
export const Outline: Story = {
  args: {
    label: "Outline",
    variant: "outline",
  }
}
export const Secondary: Story = {
  args: {
    label: "Secondary",
    variant: "secondary",
  }
}
export const Ghost: Story = {
  args: {
    label: "Ghost",
    variant: "ghost",
  }
}
export const Link: Story = {
  args: {
    label: "Link",
    variant: "link",
  }
}
