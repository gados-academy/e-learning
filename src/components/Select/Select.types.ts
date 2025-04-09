export type SelectItem = {
  value: string;
  label: string;
};

export type SelectDirection = "increasing" | "decreasing";

export type SelectProps = {
  placeholder: string;
  defaultValue: string;
  onSelect: (value: string) => void;
  items: SelectItem[];
};
