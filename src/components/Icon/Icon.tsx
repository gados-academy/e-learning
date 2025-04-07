import React from "react";
import * as PhosphorIcons from "@phosphor-icons/react";
import { IconProps } from "@phosphor-icons/react";

export type IconPhosphorName = keyof typeof PhosphorIcons;

type IconPhosphorProps = {
  name: IconPhosphorName;
  size?: number;
  color?: string;
};

export const IconPhosphor: React.FC<IconPhosphorProps> = ({
  name,
  size = 24,
  color = "currentColor",
}) => {
  const SpecificIcon = PhosphorIcons[name] as React.ElementType<IconProps>;

  if (!SpecificIcon) {
    return null;
  }

  return <SpecificIcon size={size} color={color} />;
};
