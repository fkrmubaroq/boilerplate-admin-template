"use client"
import cn from "classnames";
import React from "react";

const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithRef<"input"> & { invalid?: string }
  >
  (({ className, invalid, type, ...props }, ref) => {
  return (
    <>
      <input
        type={type}
        className={cn(
          "text-input",
          "py-2.5 px-4 w-full tracking-wide border outline-none bg-[#fefefe] focus:bg-white border-gray-200 rounded-md text-sm focus:border-blue-800 focus:ring-bluborder-blue-800 disabled:opacity-40 disabled:pointer-events-none ",
          className
        )}
        ref={ref}
        {...props}
      />
      {invalid && <span className="invalid-feedback">{invalid}</span>}
    </>
  );
});
Input.displayName = "Input";

export const InputWithItemLeft = ({
  className,
  invalid,
  type,
  item,
  ...props
}: React.ComponentPropsWithRef<"input"> & {
  invalid?: string;
  item: React.ReactNode;
}) => {
  return (
    <div className="relative flex">
      <div className="px-4 py-2 bg-gray-100 rounded-l-md text-gray-500">{item}</div>
      <Input className={cn(className, "rounded-l-none border-l-transparent")} type={type} {...props} />
    </div>
  );
};
export default Input

