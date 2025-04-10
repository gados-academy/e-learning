import { cleanup, render, screen } from "@testing-library/react";
import { Select } from "./Select";
import { SelectProps } from "./Select.types";
import { afterEach, describe, expect, it, vi } from "vitest";
import "@testing-library/jest-dom/vitest";

const makeSut = ({
  placeholder = "click here",
  items = [
    { label: "item 1", value: "1" },
    { label: "item 2", value: "2" },
  ],
  onSelect = vi.fn(),
  ...props
}: Partial<SelectProps>) => {
  render(
    <Select
      placeholder={placeholder}
      items={items}
      onSelect={onSelect}
      {...props}
    />
  );
};

describe("Select", () => {
  afterEach(() => {
    cleanup();
  });

  describe("when is mounted", () => {
    it("renders the component", () => {
      makeSut({});

      const selectEl = screen.getByText("click here");
      expect(selectEl).toBeInTheDocument();
    });
  });
});
