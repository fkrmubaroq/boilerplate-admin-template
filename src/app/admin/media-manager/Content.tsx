"use client"
import PathFile from "./components/PathFile";
import { DropdownFileManager } from "./components/DropdownFileManager";
import { Button } from "@/components/ui/button";
import { useOnClickOutside } from "@/hooks/hooks";
import {
  getCumulativePathSegments
} from "@/lib/utils";
import React, { useRef, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { LuUpload } from "react-icons/lu";
import Folder from "./components/Folder";
import File from "./components/File";
import { ResultFileManager } from "@/app/db/FileManager";
import { useRouter } from "next/navigation";
import { updateFolder } from "@/actions/file-manager";


export default function ContentMediaManager({ data, path }: { data: ResultFileManager[]; path:string }) {
  const [selectedRenameFile, setSelectedRenameFile] = useState<ResultFileManager | undefined>();
  const router = useRouter();
  const setQueryPath = (path: string) => {
    router.push(`?path=${path}`);
  }

  const onOpenFolder = (folderName: string) => {
    const newPath = `${path}${folderName}${folderName ? "/" : ""}`;
    setQueryPath(newPath);
  };
  
  const onCreateFolder = () => {};
  const onClickUploadFile = () => {};
  const onDeleteFolder = () => {};
  const onUpdateFolder = async (selected: ResultFileManager) => {
    setSelectedRenameFile(undefined);
    const update = await updateFolder(selected);
    console.log("update", update);
  };

  const onPreviewFile = () => {};
  const onCopySource = () => {};
  const onUpdateFile = () => {};
  const onDeleteFile = () => {};
  const onDownloadFile = () => {};

  return (
    <>
      <div className="flex justify-between">
        <div className="mb-4 text-xl font-medium tracking-wide">Media</div>
        <ActionButtonManager
          onClickCreateFolder={onCreateFolder}
          onClickUploadFile={onClickUploadFile}
        />
      </div>
      <span className="mb-5 flex gap-x-2 text-sm text-gray-400">
        {getCumulativePathSegments(path).map((segment, key, arr) => (
          <PathFile
            key={key}
            segment={segment}
            appendArrow={key !== arr.length - 1}
            onSelect={(segment) => {
              setQueryPath(segment);
            }}
          />
        ))}
      </span>
      <div className="grid grid-cols-3 gap-6">
        {data?.map((item, key) => (
          <React.Fragment key={key}>
            {item.type === "FOLDER" && (
              <Folder
                data={item}
                onSelect={onOpenFolder}
                onDeleteFolder={onDeleteFolder}
                onOpenFolder={onOpenFolder}
                selected={selectedRenameFile}
                onUpdateFolder={onUpdateFolder}
                setSelectedRenameFile={setSelectedRenameFile}
              />
            )}
            {item.type === "FILE" && (
              <File
                data={item}
                onPreviewFile={onPreviewFile}
                onCopySource={onCopySource}
                setSelectedRenameFile={setSelectedRenameFile}
                selected={selectedRenameFile}
                onUpdateFile={onUpdateFile}
                onDeleteFile={onDeleteFile}
                onDownloadFile={onDownloadFile}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

function ActionButtonManager({
  onClickCreateFolder,
  onClickUploadFile,
}: {
  onClickCreateFolder: () => void;
  onClickUploadFile: () => void;
}) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [opened, setOpened] = useState(false);
  useOnClickOutside(dropdownRef, () => {
    if (!opened) return;
    setOpened(false);
  });
  return (
    <div className="relative flex gap-x-2" ref={dropdownRef}>
      <Button
        size="lg"
        className="flex gap-x-2 !px-8"
        onClick={() => onClickUploadFile()}
      >
        <LuUpload size={15} />
        <span>Upload File</span>
      </Button>
      <Button
        size="lg"
        variant="primary"
        className="!p-4"
        onClick={() => setOpened((o) => !o)}
      >
        <BsThreeDots />
      </Button>
      {opened && (
        <DropdownFileManager
          onCreateFolder={() => {
            setOpened(false);
            onClickCreateFolder();
          }}
          onUploadFile={() => {
            setOpened(false);
            onClickUploadFile();
          }}
        />
      )}
    </div>
  );
}
