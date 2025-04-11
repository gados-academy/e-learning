import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { Select } from "./Select";
import { SelectProps } from "./Select.types";
import { afterEach, describe, expect, it, vi } from "vitest";
import "@testing-library/jest-dom/vitest";

const makeSut = ({
  label = "click here",
  items = [
    { label: "item 1", value: "1" },
    { label: "item 2", value: "2" },
    { label: "item 3", value: "3" },
  ],
  onSelect = vi.fn(),
  ...props
}: Partial<SelectProps>) => {
  render(<Select label={label} items={items} onSelect={onSelect} {...props} />);
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

    it("has aria attributes", () => {
      const label = "custom label";
      makeSut({ label });

      const buttonEl = screen.getByRole("button");
      expect(buttonEl).toHaveAttribute("aria-label", label);
      expect(buttonEl).toHaveAttribute("aria-expanded", "false");
      expect(buttonEl).toHaveAttribute("aria-haspopup", "listbox");
    });
  });

  describe("when click in the select button", () => {
    it("opens the listbox", async () => {
      makeSut({});

      const listboxEl = screen.findByRole("listbox");
      const buttonEl = screen.getByRole("button");
      userEvent.click(buttonEl);

      expect(await listboxEl).toBeInTheDocument();
    });

    it("updates open aria attribute", async () => {
      makeSut({});

      const listboxEl = screen.findByRole("listbox");
      const buttonEl = screen.getByRole("button");
      userEvent.click(buttonEl);

      expect(await listboxEl).toBeInTheDocument();
      expect(buttonEl).toHaveAttribute("aria-expanded", "true");
    });

    it("focus in the first item", async () => {
      makeSut({});

      const buttonEl = screen.getByRole("button");
      userEvent.click(buttonEl);

      await waitFor(async () => {
        const firstItemEl = screen.getByRole("option", { name: /Item 1/i });

        expect(firstItemEl).toHaveFocus();
        expect(firstItemEl).toHaveAttribute("tabIndex", "0");
      });
    });

    describe("and press arrow down", () => {
      it("focus in the second item", async () => {
        makeSut({});
        const userEvnt = userEvent.setup();

        const buttonEl = screen.getByRole("button");
        userEvnt.click(buttonEl);

        await waitFor(async () => {
          const firstItemEl = screen.getByRole("option", { name: /Item 1/i });
          const secondItemEl = screen.getByRole("option", { name: /Item 2/i });

          expect(firstItemEl).toHaveFocus();
          expect(firstItemEl).toHaveAttribute("tabIndex", "0");

          await userEvnt.keyboard("{ArrowDown}");

          expect(secondItemEl).toHaveFocus();
          expect(secondItemEl).toHaveAttribute("tabIndex", "0");

          expect(firstItemEl).not.toHaveFocus();
          expect(firstItemEl).toHaveAttribute("tabIndex", "-1");
        });
      });
    });

    describe("when press arrow down in the last item", () => {
      it("focus on first element", async () => {
        makeSut({});
        const userEvnt = userEvent.setup();

        const buttonEl = screen.getByRole("button");
        userEvnt.click(buttonEl);

        await waitFor(async () => {
          const firstItemEl = screen.getByRole("option", { name: /Item 1/i });
          const lastItemEl = screen.getByRole("option", {
            name: /Item 3/i,
          });

          lastItemEl.focus();
          expect(lastItemEl).toHaveFocus();

          await userEvnt.keyboard("{ArrowDown}");

          expect(firstItemEl).toHaveFocus();
          expect(firstItemEl).toHaveAttribute("tabIndex", "0");

          expect(lastItemEl).not.toHaveFocus();
          expect(lastItemEl).toHaveAttribute("tabIndex", "-1");
        });
      });
    });

    describe("and press arrow up", () => {
      it("focus in the up item", async () => {
        makeSut({});
        const userEvnt = userEvent.setup();

        const buttonEl = screen.getByRole("button");
        userEvnt.click(buttonEl);

        await waitFor(async () => {
          const secondItemEl = screen.getByRole("option", { name: /Item 2/i });
          const firstItemEl = screen.getByRole("option", { name: /Item 1/i });

          secondItemEl.focus();
          expect(secondItemEl).toHaveFocus();

          await userEvnt.keyboard("{ArrowUp}");

          expect(firstItemEl).toHaveFocus();
          expect(firstItemEl).toHaveAttribute("tabIndex", "0");

          expect(secondItemEl).not.toHaveFocus();
          expect(secondItemEl).toHaveAttribute("tabIndex", "-1");
        });
      });
    });

    describe("and press arrow up in the first item", () => {
      it("focus in the last item", async () => {
        makeSut({});
        const userEvnt = userEvent.setup();

        const buttonEl = screen.getByRole("button");
        userEvnt.click(buttonEl);

        await waitFor(async () => {
          const firstItemEl = screen.getByRole("option", { name: /Item 1/i });
          const lastItemEl = screen.getByRole("option", { name: /Item 3/i });

          expect(firstItemEl).toHaveFocus();
          expect(firstItemEl).toHaveAttribute("tabIndex", "0");

          await userEvnt.keyboard("{ArrowUp}");

          expect(lastItemEl).toHaveFocus();
          expect(lastItemEl).toHaveAttribute("tabIndex", "0");

          expect(firstItemEl).not.toHaveFocus();
          expect(firstItemEl).toHaveAttribute("tabIndex", "-1");
        });
      });
    });

    describe("and press enter", () => {
      it("calls the onSelect function", async () => {
        const onSelectMock = vi.fn();

        makeSut({ onSelect: onSelectMock });
        const userEvnt = userEvent.setup();

        const buttonEl = screen.getByRole("button");
        userEvnt.click(buttonEl);

        await waitFor(async () => {
          const firstItemEl = screen.getByRole("option", { name: /Item 1/i });

          expect(firstItemEl).toHaveFocus();
          expect(firstItemEl).toHaveAttribute("tabIndex", "0");

          await userEvnt.keyboard("{Enter}");

          expect(onSelectMock).toHaveBeenCalledWith("1");
        });
      });
    });

    describe("and press Space", () => {
      it("calls the onSelect function", async () => {
        const onSelectMock = vi.fn();

        makeSut({ onSelect: onSelectMock });
        const userEvnt = userEvent.setup();

        const buttonEl = screen.getByRole("button");
        userEvnt.click(buttonEl);

        await waitFor(async () => {
          const firstItemEl = screen.getByRole("option", { name: /Item 1/i });

          expect(firstItemEl).toHaveFocus();
          expect(firstItemEl).toHaveAttribute("tabIndex", "0");

          await userEvnt.keyboard("{Space}");

          expect(onSelectMock).toHaveBeenCalledWith("1");
        });
      });
    });

    describe("and press Tab", () => {
      it("calls the onSelect function", async () => {
        const onSelectMock = vi.fn();

        makeSut({ onSelect: onSelectMock });
        const userEvnt = userEvent.setup();

        const buttonEl = screen.getByRole("button");
        userEvnt.click(buttonEl);

        await waitFor(async () => {
          const firstItemEl = screen.getByRole("option", { name: /Item 1/i });

          expect(firstItemEl).toHaveFocus();
          expect(firstItemEl).toHaveAttribute("tabIndex", "0");

          await userEvnt.keyboard("{Tab}");

          expect(onSelectMock).toHaveBeenCalledWith("1");
        });
      });
    });

    describe("and press Escape", () => {
      it("closes the select", async () => {
        makeSut({});
        const userEvnt = userEvent.setup();

        const buttonEl = screen.getByRole("button");
        userEvnt.click(buttonEl);

        await waitFor(async () => {
          const firstItemEl = screen.queryByRole("option", { name: /Item 1/i });

          expect(firstItemEl).toHaveFocus();
          expect(firstItemEl).toHaveAttribute("tabIndex", "0");

          await userEvnt.keyboard("{Escape}");

          expect(firstItemEl).not.toBeInTheDocument();
        });
      });
    });

    describe("and press Backspace", () => {
      it("closes the select", async () => {
        makeSut({});
        const userEvnt = userEvent.setup();

        const buttonEl = screen.getByRole("button");
        userEvnt.click(buttonEl);

        await waitFor(async () => {
          const firstItemEl = screen.queryByRole("option", { name: /Item 1/i });

          expect(firstItemEl).toHaveFocus();
          expect(firstItemEl).toHaveAttribute("tabIndex", "0");

          await userEvnt.keyboard("{Backspace}");

          expect(firstItemEl).not.toBeInTheDocument();
        });
      });
    });

    describe("and press Home", () => {
      it("closes the select", async () => {
        makeSut({});
        const userEvnt = userEvent.setup();

        const buttonEl = screen.getByRole("button");
        userEvnt.click(buttonEl);

        await waitFor(async () => {
          const lastItemEl = screen.getByRole("option", { name: /Item 3/i });
          const firstItemEl = screen.getByRole("option", { name: /Item 1/i });

          lastItemEl.focus();
          expect(lastItemEl).toHaveFocus();

          await userEvnt.keyboard("{Home}");

          expect(firstItemEl).toHaveFocus();
          expect(firstItemEl).toHaveAttribute("tabIndex", "0");

          expect(lastItemEl).not.toHaveFocus();
          expect(lastItemEl).toHaveAttribute("tabIndex", "-1");
        });
      });
    });

    describe("and press End", () => {
      it("closes the select", async () => {
        makeSut({});
        const userEvnt = userEvent.setup();

        const buttonEl = screen.getByRole("button");
        userEvnt.click(buttonEl);

        await waitFor(async () => {
          const lastItemEl = screen.getByRole("option", { name: /Item 3/i });
          const firstItemEl = screen.getByRole("option", { name: /Item 1/i });

          expect(firstItemEl).toHaveFocus();
          expect(firstItemEl).toHaveAttribute("tabIndex", "0");
          await userEvnt.keyboard("{End}");

          expect(lastItemEl).toHaveFocus();
          expect(lastItemEl).toHaveAttribute("tabIndex", "0");

          expect(firstItemEl).not.toHaveFocus();
          expect(firstItemEl).toHaveAttribute("tabIndex", "-1");
        });
      });
    });
  });
});
