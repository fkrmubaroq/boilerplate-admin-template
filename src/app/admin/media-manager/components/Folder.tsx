import { ResultFileManager } from "@/app/db/FileManager";
import { DropdownActionFolder } from "./DropdownFileManager";
import { Button } from "@/components/ui/button";
import Input from "@/components/ui/form/input";
import { useOnClickOutside } from "@/hooks/hooks";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaFolder } from "react-icons/fa";

export default function Folder({
  data,
  onSelect,
  onOpenFolder,
  onDeleteFolder,
  selected,
  onUpdateFolder,
  setSelectedRenameFile,
  hideActionButton,
  variant = "primary",
}: {
  data: ResultFileManager;
  onSelect: (name: string) => void;
  onOpenFolder: (name: string) => void;
  onDeleteFolder: (data: ResultFileManager) => void;
  selected: ResultFileManager | undefined,
  onUpdateFolder: (data: ResultFileManager) => void;
  setSelectedRenameFile: React.Dispatch<React.SetStateAction<ResultFileManager | undefined>>;
  hideActionButton?: boolean;
  variant?: "primary" | "secondary";
}) {
  const folderRef = useRef(null);
  const editInputRef = useRef<HTMLInputElement>(null);
  const [opened, setOpened] = useState(false);
  const [edit, setEdit] = useState(data.name);

  useEffect(() => {
    if (selected?.id !== data.id || !editInputRef.current) return;
    editInputRef.current.select();
    setEdit(data.name);
  }, [selected]);

  useOnClickOutside(folderRef, () => {
    if (!opened) return;
    setOpened(false);
  });

  const onAction = (action: "open" | "rename" | "delete") => {
    setOpened(false);
    if (action === "open") {
      onOpenFolder(data.name);
      return;
    }
    if (action === "rename") {
      setSelectedRenameFile(data);

      return;
    }

    if (action === "delete") {
      onDeleteFolder(data);
      return;
    }
  };

  return (
    <div
      ref={folderRef}
      onDoubleClick={(e) => {
        e.stopPropagation();
        onSelect(data.name);
      }}
      className={cn(
        "group relative flex cursor-pointer items-center justify-between gap-x-4 rounded-md bg-white py-3 pl-5 pr-3 shadow-sm transition-all duration-200",
        "hover:bg-primary hover:text-white  focus:text-white",
        {
          "hover:bg-primary focus:bg-primary": variant === "primary",
          "hover:bg-secondary focus:bg-secondary": variant === "secondary",
        }
      )}
    >
      <div className="flex items-center gap-x-4">
        <span>
          <FaFolder color="#facc15" size={42} />
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
              onUpdateFolder({ ...data, name: edit });
            }}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                if (e.currentTarget.value === data.name) {
                  setSelectedRenameFile(undefined);
                  return;
                }
                onUpdateFolder({ ...data, name: edit });
              }
            }}
          />
        ) : (
          <span className="font-semibold tracking-wide">{data.name}</span>
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
            <DropdownActionFolder
              onDeleteFolder={() => onAction("delete")}
              onOpenFolder={() => onAction("open")}
              onRenameFolder={() => onAction("rename")}
            />
          )}
        </div>
      )}
    </div>
  );
}
