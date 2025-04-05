import React from "react";
import { TypographyProps } from "./Typography.types";

export const Typography = ({
  tag,
  variant,
  className = "",
  children,
  ...rest
}: TypographyProps) => {
  const Component = tag as React.ElementType;

  return (
    <Component className={`${variant} ${className}`} {...rest}>
      {children}
    </Component>
  );
};
