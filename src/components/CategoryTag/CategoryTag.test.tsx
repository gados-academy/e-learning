import { cleanup, render, screen } from "@testing-library/react";
import { CategoryTag, CategoryTagProps } from "./CategoryTag";
import { afterEach, describe, expect, it } from "vitest";
import "@testing-library/jest-dom/vitest";


const makeSut = (props: Partial<CategoryTagProps> = {}) => {
  const { type = 'purple', children = 'Tag', ...rest } = props;
  render(
    <CategoryTag type={type} {...rest}>
      {children}
    </CategoryTag>
  );
  
}

describe("CategoryTag", () => {
  afterEach(() => {
      cleanup();
    });

  it("should render the component with default props", () => {
    makeSut();
    const tag = screen.getByText(/tag/i);
    expect(tag).toBeInTheDocument();
  });

  it("should render the component with custom props", () => {
    makeSut({ type: 'red', children: 'Custom Tag' });
    const tag = screen.getByText(/custom tag/i).parentNode;
    expect(tag).toBeInTheDocument();
    expect(tag).toHaveClass('bg-danger-100 text-danger-700');
  });

  it("should render the component with custom className", () => {
    makeSut({ className: 'custom-class' });
    const tag = screen.getByText(/tag/i).parentNode;
    expect(tag).toHaveClass('custom-class');
  });
});