import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, afterEach } from "vitest";
import "@testing-library/jest-dom/vitest";
import { Input } from "./Input";

const makeSut = (props: React.ComponentProps<typeof Input>) => {
  render(<Input {...props} />);
};

describe("Input", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders the input with default props", () => {
    makeSut({ placeholder: "Type something..." });
    const input = screen.getByPlaceholderText("Type something...");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "text");
  });

  it("renders the input with an icon passed via prop", () => {
    const TestIcon = () => <span>Icon</span>;
    makeSut({ placeholder: "Type something...", icon: <TestIcon /> });
    const icon = screen.getByText("Icon");
    expect(icon).toBeInTheDocument();
  });

  it("renders the 'success' status icon when status is set to 'success'", () => {
    makeSut({ placeholder: "Type something...", status: "success" });
    const container =
      screen.getByPlaceholderText("Type something...").parentElement;
    expect(container?.querySelector(".text-success-500")).toBeInTheDocument();
  });

  it("renders the 'error' status icon when status is set to 'error'", () => {
    makeSut({ placeholder: "Type something...", status: "error" });
    const container =
      screen.getByPlaceholderText("Type something...").parentElement;
    expect(container?.querySelector(".text-danger-500")).toBeInTheDocument();
  });

  it("displays the 'rigthComponent' when the input is focused", () => {
    const RightComponent = () => <span>Right</span>;
    makeSut({
      placeholder: "Type something...",
      rightComponent: <RightComponent />,
    });
    const input = screen.getByPlaceholderText("Type something...");
    expect(screen.queryByText("Right")).not.toBeInTheDocument();
    fireEvent.focus(input);
    expect(screen.getByText("Right")).toBeInTheDocument();
  });

  it("focuses the input when clicking on the container", () => {
    makeSut({ placeholder: "Type something..." });
    const input = screen.getByPlaceholderText("Type something...");
    const container = input.parentElement;
    fireEvent.click(container!);
    expect(input).toHaveFocus();
  });
});
