import cn from "classnames";
const listDirection = {
  row: "flex flex-row gap-x-2 items-center",
  col: "flex flex-col gap-y-2",
};
export default function ContainerInput({
  children,
  className,
  direction = "col",
}: React.ComponentPropsWithoutRef<"div"> & { direction?: keyof typeof listDirection } ) {
  return (
    <div className={cn(className, listDirection[direction])}>{children}</div>
  );
}
