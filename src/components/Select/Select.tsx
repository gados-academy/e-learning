import { useCallback, useRef, useState } from "react";
import { SelectDirection, SelectProps } from "./Select.types";
import { CaretDown } from "@phosphor-icons/react";
import { Typography } from "@/components/Typography/Typography";
import { Button } from "@/components/Button/Default/Button";

export const Select = ({
  label,
  items,
  defaultValue,
  onSelect,
  className,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(defaultValue ?? "");

  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const findFocusedIndex = () => {
    const focusedElement = document.activeElement;
    if (!focusedElement) {
      return -1;
    }

    return buttonRefs.current.findIndex((ref) => ref === focusedElement);
  };

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (value: string) => {
    const findLabel = items.find((item) => item.value === value)?.label;
    if (!findLabel) return;

    setSelectedItem(findLabel);
    onSelect(value);
    toggleOpen();
  };

  const updateButtonFocus = useCallback(
    (nextIndex: number, direction: SelectDirection) => {
      const lastIndex = buttonRefs.current.length - 1;
      const increaseIndex = nextIndex > 0 ? nextIndex - 1 : lastIndex;
      const decreaseIndex = nextIndex === lastIndex ? 0 : nextIndex + 1;

      const indexDirection =
        direction === "decreasing" ? decreaseIndex : increaseIndex;

      buttonRefs.current[indexDirection]?.setAttribute("tabindex", "-1");
      buttonRefs.current[nextIndex]?.setAttribute("tabindex", "0");
      buttonRefs.current[nextIndex]?.focus();
    },
    [],
  );

  const handleKeyDown = (event: React.KeyboardEvent<HTMLUListElement>) => {
    if (!isOpen) return;

    let currentFocusIndex = findFocusedIndex();
    const lastIndex = buttonRefs.current.length - 1;

    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();

        const nextIndex = ++currentFocusIndex;
        const isLastElementFocused = lastIndex < nextIndex;

        if (isLastElementFocused) {
          updateButtonFocus(0, "increasing");
          return;
        }

        updateButtonFocus(nextIndex, "increasing");
        break;

      case "ArrowUp":
        event.preventDefault();
        const prevIndex = --currentFocusIndex;
        const isFirstElementFocused = prevIndex < 0;

        if (isFirstElementFocused) {
          updateButtonFocus(lastIndex, "decreasing");
          return;
        }

        updateButtonFocus(prevIndex, "decreasing");
        break;

      case "Enter":
      case " ":
      case "Space":
      case "Tab":
        event.preventDefault();
        if (currentFocusIndex !== -1 && items[currentFocusIndex]) {
          handleSelect(items[currentFocusIndex].value);
        }
        break;
      case "Escape":
      case "Backspace":
        event.preventDefault();
        setIsOpen(false);
        break;

      case "Home":
        updateButtonFocus(0, "decreasing");
        break;

      case "End":
        updateButtonFocus(lastIndex, "decreasing");
        break;
    }
  };

  const assignRefAndFocusFirstRef = useCallback(
    (node: HTMLButtonElement | null, index: number) => {
      buttonRefs.current[index] = node;

      if (node && index === 0) {
        node.focus();
      }
    },
    [],
  );

  const renderItems = () =>
    items.map((item, index) => (
      <li key={item.value} role="presentation" className="font-light">
        <Button
          tabIndex={index === 0 ? 0 : -1}
          size="s"
          role="option"
          variant="ghost"
          text={item.label}
          aria-selected={item.value === selectedItem}
          onClick={() => handleSelect(item.value)}
          className="w-full !text-gray-700 justify-start"
          ref={(node) => assignRefAndFocusFirstRef(node, index)}
        />
      </li>
    ));

  return (
    <div>
      <div>
        <button
          aria-label={label}
          onClick={toggleOpen}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          className={`flex cursor-pointer border-2 items-center px-4 py-3 border-gray-100 w-full justify-between ${className}`}
        >
          <Typography
            tag="label"
            variant="text-button-s"
            className={selectedItem ? "text-gray-700" : "text-gray-500"}
          >
            {selectedItem || label}
          </Typography>
          <CaretDown
            data-open={isOpen}
            size={16}
            className="transition-transform data-[open=true]:rotate-180"
          />
        </button>
      </div>

      {isOpen && (
        <ul
          role="listbox"
          onKeyDown={handleKeyDown}
          className="border-2 border-t-0 border-gray-100"
        >
          {renderItems()}
        </ul>
      )}
    </div>
  );
};
