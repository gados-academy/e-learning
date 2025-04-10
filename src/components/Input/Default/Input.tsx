import { cn } from "@/lib/util";
import * as React from "react";

interface InputProps extends React.ComponentProps<"input"> {
  icon?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", icon, ...props }, ref) => {
    return (
      <div
        className="flex items-center border border-gray-100 px-4.5 py-3 w-full gap-[12px] cursor-text"
        onClick={(e) => {
          const input = e.currentTarget.querySelector("input");
          input?.focus();
        }}
      >
        {icon}

        <input
          type={type}
          ref={ref}
          className={cn(
            "flex-1 outline-none bg-transparent text-gray-500 placeholder:text-body-lg-400",
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
