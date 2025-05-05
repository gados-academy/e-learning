import React from 'react';
import { cn } from '@/lib/utils';
import { FunFactProps, FunFactColor } from './FunFact.types';

const colorMap: Record<FunFactColor, { bgColor: string; iconColor: string }> = {
  red: {
    bgColor: 'bg-red-100',
    iconColor: 'text-red-500',
  },
  indigo: {
    bgColor: 'bg-indigo-100',
    iconColor: 'text-indigo-500',
  },
  green: {
    bgColor: 'bg-green-100',
    iconColor: 'text-green-500',
  },
  orange: {
    bgColor: 'bg-orange-100',
    iconColor: 'text-orange-500',
  },
  gray: {
    bgColor: 'bg-gray-100',
    iconColor: 'text-gray-500',
  },
};

export const FunFact: React.FC<FunFactProps> = ({
  icon,
  value,
  label,
  color = 'red',
  className,
}) => {
  const { bgColor, iconColor } = colorMap[color];

  return (
    <article className={cn('flex items-center gap-4 p-4 w-64 ', bgColor, className)}>
      <div className="p-2 rounded bg-white">
        <span className={cn('text-xl', iconColor)}>{icon}</span>
      </div>
      <div>
        <div className="text-xl font-semibold text-gray-900">{value}</div>
        <div className="text-sm text-gray-600">{label}</div>
      </div>
    </article>
  );
};
