import { useState } from "react";
import { SelectProps } from "./Select.types";
import { CaretDown } from "@phosphor-icons/react";
import { Typography } from "../Typography/Typography";
import { Button } from "../Button/Default/Button";

export const Select = ({ placeholder, items }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  const renderItems = () =>
    items.map((item) => (
      <li key={item.value}>
        <Button
          variant="ghost"
          size="s"
          className="w-full text-black justify-start"
          text={item.label}
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
