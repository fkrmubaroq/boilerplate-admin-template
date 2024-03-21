"use client";
import { debounce } from "@/lib/utils";
import cn from "classnames";
import { useCallback, useState } from "react";
import { FiSearch } from "react-icons/fi";
import Input from ".";

export default function SearchInput({
  onChange,
  placeholder,
  name,
  value,
  className,
}: React.ComponentPropsWithoutRef<"input">) {

  const [keyword, setKeyword] = useState(value);
  const debounceSearch = useCallback(debounce((e:React.ChangeEvent<HTMLInputElement>) => onChange && onChange(e)), []);

  return (
    <div className="relative shrink-0">
      <Input
        placeholder={placeholder ? placeholder : "Search"}
        className={cn("!h-10", className)}
        name={name}
        value={keyword}
        onChange={(e) => {
          setKeyword(e.target.value);
          debounceSearch(e)
        }}
      />
      <div className="absolute right-3 top-3">
        <FiSearch color="#9ca3af" />
      </div>
    </div>
  );
}
