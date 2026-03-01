import {
  Dialog,
  DialogContent as DialogContentPrimitive,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/primitive";
import React from "react";
import { PropsDialogContent } from "./types";
import { Dialog as DialogPrimitive } from "radix-ui";

const DialogContent = ({
  children,
  dialogTitle,
  dialogDesc,
  ...props
}: PropsDialogContent & React.ComponentProps<typeof DialogPrimitive.Root>) => {
  return (
    <Dialog {...props}>
      <DialogContentPrimitive>
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
          <DialogDescription>{dialogDesc}</DialogDescription>
        </DialogHeader>
        {children}
      </DialogContentPrimitive>
    </Dialog>
  );
};

export default DialogContent;
