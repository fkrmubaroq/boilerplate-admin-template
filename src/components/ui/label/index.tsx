import { cn } from "@/lib/utils";
import React from "react";

const Label = React.forwardRef<
  HTMLLabelElement,
  React.ComponentPropsWithoutRef<"label">
>(({ className, children, ...props }, ref) => (
  <label
    ref={ref}
    className={cn("block text-sm font-medium text-gray-500 tracking-wide", className)}
    {...props}
  >
    {children}
  </label>
));

export default Label;