import { IconType } from "react-icons";
import { Button ,type ButtonProps } from ".";
import { cn } from "@/lib/utils";

export default function ButtonIcon({
  className,
  variant,
  icon,
  text,
  ...props
}: ButtonProps & { icon: IconType; text?: string }) {
  const Icon = icon;
  return (
    <Button
      {...props}
      className={cn("flex gap-x-1 items-center", className)}
      variant={variant}
    >
      <Icon size={20} />
      {text && <span>{text}</span>}
    </Button>
  );
}