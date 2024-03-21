"use client"
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

type BreadcrumbProps = {
  text: string;
  link: string;
  active: boolean
}
export default function Breadcrumb({
  className,
  breadcrumb,
}: {
    className?: string;
    breadcrumb: BreadcrumbProps[];
  }) {
  
  const router = useRouter();
  
  return (
    <div className={cn("flex items-center gap-x-2", className)}>
      {breadcrumb.map((item, key) => (
        <div className="flex gap-x-3 items-center">
          <div
            className={cn(" text-sm", {
              "text-gray-400": !item.active,
              "text-slate-600 cursor-pointer": item.active,
            })}
            onClick={() => item.active && router.push(item.link)}
            key={key}
          >
            {item.text}
          </div>
          {key !== breadcrumb.length - 1 && (
            <span className="text-gray-300 text-sm">/</span>
          )}
        </div>
      ))}
    </div>
  );
}