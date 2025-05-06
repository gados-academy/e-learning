import { IconPhosphor } from "@/components/Icon/Icon";
import { cn } from "@/lib/utils";
import * as React from "react";
import { InputProps } from "./Input.types";

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, rightComponent, type = "text", icon, status, ...props },
    ref
  ) => {
    const [focused, setFocused] = React.useState(false);

    const renderStatusIcon = () => {
      if (status === "success") {
        return (
          <IconPhosphor
            name="CheckCircle"
            className="text-success-500"
            weight="fill"
          />
        );
      }
      if (status === "error") {
        return (
          <IconPhosphor
            name="Warning"
            className="text-danger-500"
            weight="fill"
          />
        );
      }
      return null;
    };

    return (
      <div
        className={cn(
          "flex items-center border px-4.5 py-3 w-full gap-[12px] cursor-text",
          "hover:ring-1 hover:ring-primary-200 focus-within:ring-1 focus-within:ring-primary-500",
          {
            "border-green-200 bg-green-50": status === "success",
            "border-red-200 bg-red-50": status === "error",
            "border-gray-100": !status,
          }
        )}
        onClick={(e) => {
          const input = e.currentTarget.querySelector("input");
          input?.focus();
        }}
      >
        {icon}

        <input
          type={type}
          ref={ref}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={cn(
            "flex-1 outline-none bg-transparent text-gray-500 placeholder:text-body-lg-400",
            className
          )}
          {...props}
        />
        {focused && rightComponent ? rightComponent : renderStatusIcon()}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
