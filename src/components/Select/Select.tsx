import { useCallback, useRef, useState } from "react";
import { SelectProps } from "./Select.types";
import { CaretDown } from "@phosphor-icons/react";
import { Typography } from "../Typography/Typography";
import { Button } from "../Button/Default/Button";

export const Select = ({ placeholder, items, onSelect }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

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
    toggleOpen();
    onSelect(value);
  };

  const assignRefAndFocusFirstRef = useCallback(
    (node: HTMLButtonElement | null, index: number) => {
      buttonRefs.current[index] = node;

      if (node && index === 0) {
        node.focus();
      }
    },
    []
  );

  const renderItems = () =>
    items.map((item, index) => (
      <li key={item.value} className="font-light">
        <Button
          tabIndex={index === 0 ? 0 : -1}
          size="s"
          variant="ghost"
          text={item.label}
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
          className="flex cursor-pointer border-2 items-center px-4 py-3 border-gray-100 w-full justify-between"
          onClick={toggleOpen}
        >
          <Typography tag="p" className="text-gray-500" variant="text-button-s">
            {placeholder}
          </Typography>
          <CaretDown size={16} className="" />
        </button>
      </div>

      {isOpen && (
        <ul className="border-2 border-t-0 border-gray-100">{renderItems()}</ul>
      )}
    </div>
  );
};
