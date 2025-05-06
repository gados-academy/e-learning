export type Status = "success" | "error" | undefined;
export interface InputProps extends React.ComponentProps<"input"> {
  icon?: React.ReactNode;
  rightComponent?: React.ReactNode;
  status?: Status;
}
