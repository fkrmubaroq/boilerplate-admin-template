import { cn } from "@/lib/utils";

export default function PingAnimation({
  color = "bg-primary",
  width = "h-3",
  height = "h-3",
}: {
    color?: string;
    width?: string;
    height?: string;
}) {
  return (
    <span className={cn("relative flex", width, height)}>
      <span className={cn("animate-ping absolute inline-flex h-full w-full rounded-full  opacity-75", color)}></span>
      <span
        className={cn(
          "relative inline-flex rounded-full",
          color,
          width,
          height
        )}
      ></span>
    </span>
  );
}
