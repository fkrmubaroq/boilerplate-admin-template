import { cn } from "@/lib/utils"

const buttonStyles = {
  colors: {
    primary: "text-white bg-primary hover:bg-primary",
    secondary: "border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200",
    low: "text-indigo-600 hover:bg-indigo-100 active:bg-indigo-200 bg-indigo-50",
  },
  size: {
    sm: "px-3 py-1.5",
    default: "px-4 py-2",
    md: "px-5 py-3",
    lg: "px-6 py-3.5",
    xl: "px-7 py-4",
  },
};

export default function Button({
  children,
  className,
  size = "default",
  variant = "secondary",
  ...props
}: React.ComponentPropsWithoutRef<"button"> & {
    size: "sm" | "default" | "md" | "lg" | "xl",
    variant: "primary" | "low" | "secondary"
}) {
  return (
    <button
      {...props}
      className={cn(
        "text-sm duration-150  rounded-lg disabled:opacity-50",
        buttonStyles.size[size],
        buttonStyles.colors[variant]
      )}
    >
      {children}
    </button>
  );
}
