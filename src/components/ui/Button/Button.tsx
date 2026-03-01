import React, { ReactNode } from "react";
import { Button as ButtonPrimitive } from "@/components/primitive";
import { VariantProps } from "class-variance-authority";
import { buttonVariants } from "@/components/primitive/Button/buttonVariants";
import { cn } from "@/lib/utils";

const Button = ({
  label,
  className,
  variant = "default",
  size = "default",
  ...props
}: {
  label: string | ReactNode;
} & React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) => {
  return (
    <ButtonPrimitive
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {label}
    </ButtonPrimitive>
  );
};

export default Button;
