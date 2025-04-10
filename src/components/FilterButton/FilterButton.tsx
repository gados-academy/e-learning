import { cn } from "@/lib/utils";
import { IconPhosphor } from "../Icon/Icon";
import { FilterButtonProps } from "./FilterButton.types";

export function FilterButton({ activeFilters, text,  ...props }: FilterButtonProps) {
  const { className } = props;
  return (
    <button 
      {...props} 
      className={cn(
        "flex outline-0 items-center justify-center cursor-pointer gap-2 bg-white max-w-42 border border-primary-200 hover:border-primary-500 rounded-md py-2 px-6 group hover:text-primary-500",
        className,
      )}>
        <IconPhosphor name="Faders" />
        <div className="">{text}</div>
        <div className="group-hover:bg-primary-500 group-hover:text-white bg-primary-100 
        text-primary-500 px-1.5 py-1 ml-4">
          {activeFilters}
        </div>
    </button>
  )
}
