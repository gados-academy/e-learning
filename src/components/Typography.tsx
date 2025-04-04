import React, { JSX } from "react";

type TypographyVariants =
  | "text-display-1"
  | "text-display-2"
  | "text-display-3"
  | "text-heading-1"
  | "text-heading-2"
  | "text-heading-3"
  | "text-heading-4"
  | "text-button-l"
  | "text-button-m"
  | "text-button-s"
  | "text-label-xxl"
  | "text-label-xl"
  | "text-label-lg"
  | "text-label-md"
  | "text-label-sm"
  | "text-body-xxxl"
  | "text-body-xxl-400"
  | "text-body-xxl-500"
  | "text-body-xxl-600"
  | "text-body-xl-400"
  | "text-body-xl-500"
  | "text-body-xl-600"
  | "text-body-lg-400"
  | "text-body-lg-500"
  | "text-body-lg-600"
  | "text-body-md-400"
  | "text-body-md-500"
  | "text-body-md-600"
  | "text-body-sm-400"
  | "text-body-sm-500"
  | "text-body-sm-600"
  | "text-body-xs-400"
  | "text-body-xs-500"
  | "text-body-xs-600";

type TypographyTag = keyof JSX.IntrinsicElements;

type TypographyProps = {
  as: TypographyTag;
  variant: TypographyVariants;
  className?: string;
  children: React.ReactNode;
} & Omit<JSX.IntrinsicElements[TypographyTag], "className" | "children">;

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
