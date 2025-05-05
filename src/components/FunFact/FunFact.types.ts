import { ReactNode } from 'react';

export type FunFactColor = 'red' | 'indigo' | 'green' | 'orange' | 'gray';

export interface FunFactProps {
  icon: ReactNode;
  value: number | string;
  label: string;
  color?: FunFactColor;
  className?: string;
}
