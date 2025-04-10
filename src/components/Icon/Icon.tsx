import React from "react";
import * as PhosphorIcons from "@phosphor-icons/react";
import { IconProps } from "@phosphor-icons/react";

export type IconPhosphorName = keyof typeof PhosphorIcons;

export type IconPhosphorProps = {
  name: IconPhosphorName;
  size?: number;
  color?: string;
  className?: string;
  weight?: "fill" | "light" | "thin" | "regular" | "bold";
};

export const IconPhosphor: React.FC<IconPhosphorProps> = ({
  name,
  size = 24,
  color = "currentColor",
  className,
  weight,
}) => {
  const SpecificIcon = PhosphorIcons[name] as React.ElementType<IconProps>;

  if (!SpecificIcon) {
    return null;
  }

  return (
    <SpecificIcon
      className={`pointer-events-none ${className}`}
      size={size}
      color={color}
      weight={weight}
    />
  );
};
