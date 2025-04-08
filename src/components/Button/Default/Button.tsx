import { Typography } from "@/components/Typography/Typography";
import {
  ButtonProps,
  ButtonSize,
  SizeClass,
  ButtonColor,
  ButtonVariant,
} from "./Button.types";

export const Button = ({
  variant = "solid",
  color = "primary",
  size = "m",
  className = "",
  text = "Button",
  onlyIcon,
  icon,
  iconPosition,
  rounded,
  ...props
}: ButtonProps) => {
  const sizeClasses: Record<ButtonSize, SizeClass> = {
    s: {
      button: "px-[1rem] py-[0.5rem]",
      text: "text-button-s",
    },
    m: {
      button: "px-[1.5rem] py-[0.75rem]",
      text: "text-button-m",
    },
    l: {
      button: "px-[2rem] py-[1rem]",
      text: "text-button-l",
    },
  };

  const colorClasses: Record<ButtonColor, Record<ButtonVariant, string>> = {
    primary: {
      solid: "bg-primary-500 hover:bg-primary-600 hover:shadow-primary text-white",
      tinted: "bg-primary-100 hover:bg-primary-200 text-primary-500",
      ghost: "bg-transparent hover:bg-primary-100 text-primary-500",
      simple:
        "bg-transparent border-b-[0.125rem] border-b-transparent hover:border-b-[0.125rem] hover:border-b-primary-500 text-primary-500", // 2px
    },
    secondary: {
      solid: "bg-secondary-500 hover:bg-secondary-600 hover:shadow-secondary text-white",
      tinted: "bg-secondary-100 hover:bg-secondary-200 text-secondary-500",
      ghost: "bg-transparent hover:bg-secondary-100 text-secondary-500",
      simple:
        "bg-transparent border-b-[0.125rem] border-b-transparent hover:border-b-[0.125rem] hover:border-b-secondary-500 text-secondary-500",
    },
    gray: { 
      solid: "bg-gray-900 hover:bg-gray-800 hover:shadow-gray text-white",
      tinted: "bg-gray-50 hover:bg-gray-100 text-gray-900",
      ghost: "bg-transparent hover:bg-gray-50 text-gray-900",
      simple:
        "bg-transparent border-b-[0.125rem] border-b-transparent hover:border-b-[0.125rem] hover:border-b-gray-900 text-gray-900",
    },
    success: {
      solid: "bg-success-500 hover:bg-success-600 hover:shadow-success text-white",
      tinted: "bg-success-100 hover:bg-success-200 text-success-500",
      ghost: "bg-transparent hover:bg-success-100 text-success-500",
      simple:
        "bg-transparent border-b-[0.125rem] border-b-transparent hover:border-b-[0.125rem] hover:border-b-success-500 text-success-500",
    },
    warning: {
      solid: "bg-warning-500 hover:bg-warning-600 hover:shadow-warning text-white",
      tinted: "bg-warning-100 hover:bg-warning-200 text-warning-500",
      ghost: "bg-transparent hover:bg-warning-100 text-warning-500",
      simple:
        "bg-transparent border-b-[0.125rem] border-b-transparent hover:border-b-[0.125rem] hover:border-b-warning-500 text-warning-500",
    },
    danger: {
      solid: "bg-danger-500 hover:bg-danger-600 hover:shadow-danger text-white",
      tinted: "bg-danger-100 hover:bg-danger-200 text-danger-500",
      ghost: "bg-transparent hover:bg-danger-100 text-danger-500",
      simple:
        "bg-transparent border-b-[0.125rem] border-b-transparent hover:border-b-[0.125rem] hover:border-b-danger-500 text-danger-500",
    },
  };

  const onlyIconStyle = "flex items-center justify-center h-[3rem] w-[3rem]";

  const base = `flex cursor-pointer items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 focus:ring-offset-background`;
  const roundClass = rounded ? "rounded-full" : "";
  const finalClass = `${base} ${colorClasses[color][variant]} ${
    sizeClasses[size].button
  } ${onlyIcon ? onlyIconStyle : ""} ${roundClass} ${className}`.trim();

  return (
    <button className={finalClass} {...props}>
      <Typography
        tag="div"
        variant={sizeClasses[size].text}
        className={`flex ${
          iconPosition === "start" ? "flex-row" : "flex-row-reverse"
        } items-center justify-center gap-2`}
      >
        {icon && icon}
        {!onlyIcon && <span>{text}</span>}
      </Typography>
    </button>
  );
};
