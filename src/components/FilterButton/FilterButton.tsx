import { IconPhosphor } from "../Icon/Icon";
import { FilterButtonProps } from "./FilterButton.types";

export function FilterButton({activeFilters}: FilterButtonProps) {
  return (
    <div className="flex items-center gap-2 bg-white max-w-42 border border-gray-300 rounded-md p-2 group">
      <IconPhosphor name="Faders"/>
      <div className="">Filter</div>
      <div className="group-focus:bg-primary-500 group-focus:text-white bg-primary-100 text-primary-500 px-1.5 py-1">{activeFilters}</div>
    </div>
  )
}
