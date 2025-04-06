import { cleanup, render, screen } from "@testing-library/react";
import { Button } from "./Button";
import { ButtonProps } from "./Button.types";
import { describe, it, expect, afterEach, vi } from "vitest";
import "@testing-library/jest-dom/vitest";
const makeSut = (props: ButtonProps) => {
  render(
    <Button
      variant={props.variant}
      color={props.color}
      size={props.size}
      text={props.text}
      onlyIcon={props.onlyIcon}
      icon={props.icon}
      iconPosition={props.iconPosition}
      rounded={props.rounded}
      onClick={props.onClick}
      disabled={props.disabled}
    />
  );
};

describe("Button", () => {
  afterEach(() => {
    cleanup();
  });
  it("render the button with default props", () => {
    const props: ButtonProps = {
      variant: "solid",
      color: "primary",
      size: "m",
      text: "Button",
    };
    makeSut(props);
    const button = screen.getByRole("button");
    expect(button).toBeDefined();
    expect(button).toHaveTextContent("Button");
    expect(button).not.toHaveClass("rounded-full");
    expect(button).toHaveClass("bg-primary-500 px-[1.5rem]");
  });
  it("render the button with rounded props", () => {
    const props: ButtonProps = {
      variant: "solid",
      color: "primary",
      size: "m",
      text: "Button",
      rounded: true,
    };
    makeSut(props);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("rounded-full");
  });
  it("render the button with different  size props", () => {
    const props: ButtonProps = {
      variant: "solid",
      color: "primary",
      size: "s",
      text: "Button",
    };
    makeSut(props);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("px-[1rem]");
  });
  it("render the button without text", () => {
    const props: ButtonProps = {
      variant: "solid",
      color: "primary",
      size: "m",
      text: "Button",
      onlyIcon: true,
      icon: <span>Icon</span>,
    };
    makeSut(props);
    const button = screen.getByRole("button");
    expect(button).not.toHaveTextContent("Button");
  });
  it("render the button with icon at start", () => {
    const props: ButtonProps = {
      variant: "solid",
      color: "primary",
      size: "m",
      text: "Button",
      onlyIcon: false,
      icon: <span>Icon</span>,
      iconPosition: "start",
    };
    makeSut(props);
    const button = screen.getByRole("button");
    const icon = screen.getByText("Icon");
    const text = screen.getByText("Button");
    const div = icon.parentElement;
    expect(button).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(div).toHaveClass("flex-row");
    expect(div).not.toHaveClass("flex-row-reverse");
  });
  it("click ", () => {
    const handleClick = vi.fn();
    const props: ButtonProps = {
      variant: "solid",
      color: "primary",
      size: "m",
      text: "Button",
      onlyIcon: false,
      icon: <span>Icon</span>,
      iconPosition: "start",
      onClick: handleClick,
    };
    makeSut(props);
    const button = screen.getByRole("button");
    button.click();
    expect(handleClick).toHaveBeenCalled();
    expect(button).toBeDefined();
  });
  it("not click ", () => {
    const handleClick = vi.fn();
    const props: ButtonProps = {
      variant: "solid",
      color: "primary",
      size: "m",
      text: "Button",
      onlyIcon: false,
      icon: <span>Icon</span>,
      iconPosition: "start",
      disabled: true,
      onClick: handleClick,
    };
    makeSut(props);
    const button = screen.getByRole("button");
    button.click();
    expect(handleClick).not.toHaveBeenCalled();
  });
});
