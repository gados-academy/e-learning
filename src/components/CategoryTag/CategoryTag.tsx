import { Typography } from '@/components/Typography/Typography'
// import { CategoryTagProps } from '@/components/CategoryTag/CategoryTag.types';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import React from 'react';

const categoryTagVariants = cva(
  "h-5 px-1.5 py-1 flex items-center justify-center",
  {
    variants: {
      type: {
        purple: "bg-secondary-100 text-secondary-700",
        green: "bg-success-100 text-success-700",
        yellow: "bg-warning-100 text-warning-800",
        red: "bg-danger-100 text-danger-700",
        orange: "bg-primary-100 text-primary-700",
        gray: "bg-gray-50 text-gray-900",
      }
    }
  }
)

export interface CategoryTagProps 
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof categoryTagVariants> {
      asChild?: boolean;
}

const CategoryTag = React.forwardRef<HTMLDivElement, CategoryTagProps>(
  ({ className, children, type, ...props }, ref) => {
    const Comp = 'div';
    return (
      <Comp
        ref={ref}
        className={cn(categoryTagVariants({ className, type }))}
        {...props}
      >
        <Typography variant="text-label-sm" tag='span'>{children}</Typography>
      </Comp>
    );
  }
);
CategoryTag.displayName = 'CategoryTag';
export { CategoryTag, categoryTagVariants };
