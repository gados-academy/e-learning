import React from "react";
import { Typography } from "../Typography/Typography";
import { TypographyVariants } from "../Typography/Typography.types";

type ButtonVariant = "solid" | "tinted" | "ghost";
type ButtonColor = "primary" | "secondary" | "success" | "warning" | "danger";
type ButtonSize = "s" | "m" | "l";
interface SizeClass {
  button: string;
  text: TypographyVariants;
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  text: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "solid",
  color = "primary",
  size = "m",
  className = "",
  text = "Button",
  ...props
}) => {
  const sizeClasses: Record<ButtonSize, SizeClass> = {
    s: {
      button: "flex items-center justify-center px-[16px]",
      text: "text-button-s",
    },
    m: {
      button: "flex items-center justify-center px-[24px]",
      text: "text-button-m",
    },
    l: {
      button: "flex items-center justify-center px-[32px]",
      text: "text-button-l",
    },
  };
  const colorClasses: Record<ButtonColor, Record<ButtonVariant, string>> = {
    primary: {
      solid: "bg-primary-500 hover:bg-primary-600 text-white",
      tinted: "bg-primary-100 hover:bg-primary-200 text-primary-500",
      ghost: "bg-transparent hover:bg-primary-100 text-primary-500",
    },
    secondary: {
      solid: "bg-secondary-500 hover:bg-secondary-600 text-white",
      tinted: "bg-secondary-100 hover:bg-secondary-200 text-secondary-500",
      ghost: "bg-transparent hover:bg-secondary-100 text-secondary-500",
    },
    success: {
      solid: "bg-success-500 hover:bg-success-600 text-white",
      tinted: "bg-success-100 hover:bg-success-200 text-success-500",
      ghost: "bg-transparent hover:bg-success-100 text-success-500",
    },
    warning: {
      solid: "bg-warning-500 hover:bg-warning-600 text-white",
      tinted: "bg-warning-100 hover:bg-warning-200 text-warning-500",
      ghost: "bg-transparent hover:bg-warning-100 text-warning-500",
    },
    danger: {
      solid: "bg-danger-500 hover:bg-danger-600 text-white",
      tinted: "bg-danger-100 hover:bg-danger-200 text-danger-500",
      ghost: "bg-transparent hover:bg-danger-100 text-danger-500",
    },
  };

  const finalClass =
    `${colorClasses[color][variant]} ${sizeClasses[size].button} ${className}`.trim();

  return (
    <button className={finalClass} {...props}>
      <Typography
        as="span"
        variant={sizeClasses[size].text}
        className={sizeClasses[size].text}
      >
        <span>{text}</span>
      </Typography>
    </button>
  );
};
