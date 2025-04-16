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
        default: "bg-primary-400",
        business: "bg-orange-500",
        finance: "bg-green-500",
        it: "bg-blue-500",
        personalDevelopment: "bg-purple-500",
        productivity: "bg-pink-500",
        marketing: "bg-red-500",
        photography: "bg-yellow-500",
        lifestyle: "bg-teal-500",
        design: "bg-gray-500",
        health: "bg-indigo-500",
        music: "bg-cyan-500",
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
    // const Comp = asChild ? 'span' : 'div';
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
