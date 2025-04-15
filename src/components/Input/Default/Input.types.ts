export type Status = "success" | "error" | undefined;
export interface InputProps extends React.ComponentProps<"input"> {
  icon?: React.ReactNode;
  rigthComponent?: React.ReactNode;
  status?: Status;
}
