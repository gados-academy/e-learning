export interface FilterButtonProps 
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    activeFilters: number;
    text: string;
}