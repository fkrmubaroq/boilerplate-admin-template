"use client"
import { cn } from "@/lib/utils"

export type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  size?: "sm" | "default" | "md" | "lg" | "xl",
  variant?: "primary" | "low" | "soft" | "ghost"
};

const buttonStyles = {
  colors: {
    primary: "text-white bg-primary hover:bg-primary-hover",
    soft: "border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200",
    low: "text-indigo-600 hover:bg-indigo-100 active:bg-indigo-200 bg-indigo-50",
    ghost: "bg-transparent hover:bg-gray-200"
  },
  size: {
    sm: "px-3 py-1.5",
    default: "px-4 py-2",
    md: "px-5 py-3",
    lg: "px-6 py-3.5",
    xl: "px-7 py-4",
  },
};

export function Button({
  children,
  className,
  size = "default",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "text-sm duration-150  rounded-md disabled:opacity-50",
        buttonStyles.size[size],
        buttonStyles.colors[variant],
        className
      )}
    >
      {children}
    </button>
  );
}
