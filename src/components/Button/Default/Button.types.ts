import { TypographyVariants } from "@/components/Typography/Typography.types";
import { ReactNode } from "react";

export type ButtonVariant = "solid" | "tinted" | "ghost" | "simple";
export type ButtonColor =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";
export type ButtonSize = "s" | "m" | "l";

export interface SizeClass {
  button: string;
  text: TypographyVariants;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  text: string;
  onlyIcon?: boolean;
  icon?: ReactNode;
  iconPosition?: "start" | "end";
  rounded?: boolean;
}
