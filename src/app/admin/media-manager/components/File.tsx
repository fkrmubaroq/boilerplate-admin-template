import { ResultFileManager } from "@/app/db/FileManager";
import { DropdownActionFile } from "./DropdownFileManager";
import { Button } from "@/components/ui/button";
import Input from "@/components/ui/form/input";
import { useOnClickOutside } from "@/hooks/hooks";
import { selectedFileName } from "@/lib/utils";
import cn from "classnames";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { DIR_ACCESS_FILE } from "@/lib/constant";

export default function File({
  data,
  onPreviewFile,
  onCopySource,
  setSelectedRenameFile,
  selected,
  onUpdateFile,
  onDeleteFile,
  onDownloadFile,
  hideActionButton,
  variant = "primary",
  onSelect,
  values = "",
}: {
  data: ResultFileManager;
  onPreviewFile: (data: ResultFileManager) => void;
  onCopySource: (data: ResultFileManager) => void;
  setSelectedRenameFile: React.Dispatch<
    React.SetStateAction<ResultFileManager | undefined>
  >;
  selected: ResultFileManager | undefined;
  onUpdateFile: (data: ResultFileManager) => void;
  onDeleteFile: (data: ResultFileManager) => void;
  onDownloadFile: (data: ResultFileManager) => void;
  hideActionButton?: boolean;
  variant?: "primary" | "secondary";
  onSelect?: (src: string) => void;
  values?: string;
}) {
  const [opened, setOpened] = useState(false);
  const fileRef = useRef(null);
  const editInputRef = useRef<HTMLInputElement>(null);
  const [edit, setEdit] = useState(data.name);

  useEffect(() => {
    if (selected?.id !== data.id || !editInputRef.current) return;
    selectedFileName(editInputRef.current);
    setEdit(data.name);
  }, [selected]);

  useOnClickOutside(fileRef, () => {
    if (!opened) return;
    setOpened(false);
  });

  const onAction = (
    action: "preview" | "rename" | "delete" | "copy-source" | "download"
  ) => {
    setOpened(false);
    if (action === "preview") {
      onPreviewFile(data);
      return;
    }
    if (action === "rename") {
      setSelectedRenameFile(data);
      editInputRef.current?.select();
      return;
    }

    if (action === "delete") {
      onDeleteFile(data);
      return;
    }
    if (action === "copy-source") {
      onCopySource(data);
      return;
    }

    if (action === "download") {
      onDownloadFile(data);
      return;
    }
  };
  const src = `${DIR_ACCESS_FILE}${data.path}${data.name}`;

  return (
    <div
      onClick={() => {
        onSelect && onSelect(src);
      }}
      ref={fileRef}
      className={cn(
        "group flex cursor-pointer items-center justify-between gap-x-4 rounded-md bg-gray-50 py-3 pl-3.5 pr-3 shadow-sm transition-all duration-200",
        "focus:text-white hover:text-white",
        {
          "hover:bg-primary  focus:bg-primary": variant === "primary",
          "hover:bg-secondary  focus:bg-secondary": variant === "secondary",
          "bg-secondary text-white":
            variant === "secondary" && values.includes(src),
        }
      )}
    >
      <div className="flex gap-x-4">
        <span className="flex shrink-0">
          <Image
            className="rounded-md"
            src={src}
            alt=""
            width={48}
            height={45}
          />
        </span>
        {selected?.id === data.id ? (
          <Input
            ref={editInputRef}
            onChange={(e) => setEdit(e.target.value)}
            value={edit}
            className="w-72 !pl-1  hover:text-gray-800 group-hover:text-gray-800"
            onDoubleClick={(e) => e.stopPropagation()}
            onBlur={(e) => {
              if (e.currentTarget.value === data.name) {
                setSelectedRenameFile(undefined);
                return;
              }
              onUpdateFile({ ...data, name: edit });
            }}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                if (e.currentTarget.value === data.name) {
                  setSelectedRenameFile(undefined);
                  return;
                }
                onUpdateFile({ ...data, name: edit });
              }
            }}
          />
        ) : (
          <span className="flex items-center font-semibold tracking-wide line-clamp-1 break-all">
            {data.name}
          </span>
        )}
      </div>
      {!hideActionButton && (
        <div className="relative">
          <Button
            onClick={() => setOpened((o) => !o)}
            size="lg"
            variant="ghost"
            className="!p-2 hover:bg-gray-700 hover:text-gray-800 focus:bg-gray-700 focus:text-white group-hover:text-white"
          >
            <BsThreeDots size={16} />
          </Button>
          {opened && (
            <DropdownActionFile
              onDeleteFile={() => onAction("delete")}
              onOpenFile={() => onAction("preview")}
              onRenameFile={() => onAction("rename")}
              onCopySource={() => onAction("copy-source")}
              onDownloadFile={() => onAction("download")}
            />
          )}
        </div>
      )}
    </div>
  );
}
