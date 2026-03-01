import { ReactNode } from "react";

export type PropsDialogContent = {
  children: ReactNode;
  dialogTitle: string;
  dialogDesc: string;
  isLoading?: boolean;
};
