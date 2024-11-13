import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: string[]): string => {
  return twMerge(inputs);
};
