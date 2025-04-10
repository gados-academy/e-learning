import { cn } from "@/lib/utils";
import { IconPhosphor } from "@/components/Icon/Icon";
import { FilterButtonProps } from "@/components/FilterButton/FilterButton.types";
import { Typography } from "@/components/Typography/Typography";

export function FilterButton({ activeFilters, text,  ...props }: FilterButtonProps) {
  const { className } = props;
  return (
    <button 
      {...props} 
      className={cn(
        "flex outline-0 items-center justify-center cursor-pointer gap-2 bg-white border border-primary-200 hover:border-primary-500 rounded-md py-2 px-6 group hover:text-primary-500",
        className,
      )}>
        <IconPhosphor name="Faders" />
        <Typography tag="span" variant="text-button-m" className="text-gray-900 group-hover:text-primary-500">
          {text}
        </Typography>
        <Typography 
          tag="span" 
          variant="text-body-sm-600" 
          className="group-hover:bg-primary-500 group-hover:text-white bg-primary-100 text-primary-500 px-1.5 py-1 ml-4 text-ellipsis overflow-hidden whitespace-nowrap max-w-[7ch]"
        >
          {activeFilters}
        </Typography>
    </button>
  )
}
