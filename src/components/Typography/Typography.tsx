import React from "react";
import { TypographyProps } from "./Typography.types";

export const Typography = ({
  as,
  variant,
  className = "",
  children,
  ...rest
}: TypographyProps) => {
  const Component = (as || "p") as React.ElementType;

  return (
    <Component className={`${variant} ${className}`} {...rest}>
      {children}
    </Component>
  );
};
