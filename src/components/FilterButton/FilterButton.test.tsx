import { cleanup, render, screen } from "@testing-library/react";
import { FilterButton } from "@/components/FilterButton/FilterButton";
import { FilterButtonProps } from "@/components/FilterButton/FilterButton.types";
import { describe, it, expect, afterEach } from "vitest";
import "@testing-library/jest-dom/vitest";

const makeSut = (props: FilterButtonProps) => {
  render(
    <FilterButton
      text={props.text}
      activeFilters={props.activeFilters}
      className={props.className}
    />
  );
};

describe("FilterButton", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders the button with the correct text", () => {
    const props: FilterButtonProps = {
      text: "Filter Products",
      activeFilters: 3,
    };
    makeSut(props);
    
    const button = screen.getByRole("button");
    const textElement = screen.getByText("Filter Products");
    
    expect(button).toBeDefined();
    expect(textElement).toBeInTheDocument();
    expect(button).toContainElement(textElement);
  });

  it("renders the button with the correct number of active filters", () => {
    const props: FilterButtonProps = {
      text: "Filter",
      activeFilters: 5,
    };
    makeSut(props);
    
    const button = screen.getByRole("button");
    const activeFiltersElement = screen.getByText("5");
    
    expect(button).toBeDefined();
    expect(activeFiltersElement).toBeInTheDocument();
    expect(button).toContainElement(activeFiltersElement);
    expect(activeFiltersElement).toHaveClass("bg-primary-100");
    expect(activeFiltersElement).toHaveClass("text-primary-500");
  });
});