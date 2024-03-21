"use client";

import style from "./layout.module.scss";
import Sidebar from "./sidebar";
import Header from "./header";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Layout({
  children,
  title,
}: { title: string; children: React.ReactNode }) {
  const [expand, setExpand] = useState<boolean>(false);
  return (
    <div className={cn(style["layout"], { [style["layout--expand"]]: expand })}>
      <Header title={title} setExpand={setExpand} expand={expand} />
      <Sidebar expand={expand} />
      <div className={style["content"]}>{children}</div>
    </div>
  );
}
