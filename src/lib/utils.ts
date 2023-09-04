import { type ClassValue, clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

export const twMergeCustom = extendTailwindMerge({});

export const cn = (...inputs: ClassValue[]): string =>
  twMergeCustom(clsx(inputs));
