import { FaRegEye, FaRegFolderOpen, FaRegTrashAlt } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { LuUpload } from "react-icons/lu";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";

export function DropdownFileManager({
  onCreateFolder,
  onUploadFile,
}: {
  onCreateFolder: () => void;
  onUploadFile: () => void;
}) {
  return (
    <nav className="absolute right-0 top-11 flex w-56 flex-col gap-y-2 rounded-md bg-white py-2 shadow">
      <DropdownItem
        text="Buat Folder"
        icon={<GoPlus size={20} />}
        onClick={onCreateFolder}
      />
      <DropdownItem
        text="Upload File"
        icon={<LuUpload size={17} />}
        onClick={onUploadFile}
      />
    </nav>
  );
}

export function DropdownActionFolder({
  onOpenFolder,
  onRenameFolder,
  onDeleteFolder,
}: {
  onOpenFolder: () => void;
  onRenameFolder: () => void;
  onDeleteFolder: () => void;
}) {
  return (
    <nav className="absolute right-0 top-10 flex w-56 flex-col gap-y-2 rounded-md bg-white py-2 shadow">
      <DropdownItem
        text="Buka"
        icon={<FaRegFolderOpen size={18} />}
        onClick={() => onOpenFolder()}
      />
      <DropdownItem
        text="Ganti Nama"
        icon={<MdOutlineDriveFileRenameOutline size={18} />}
        onClick={() => onRenameFolder()}
      />
      <DropdownItem
        text="Hapus"
        icon={<FaRegTrashAlt size={15} />}
        onClick={() => onDeleteFolder()}
      />
    </nav>
  );
}

export function DropdownActionFile({
  onOpenFile,
  onRenameFile,
  onDeleteFile,
  onCopySource,
  onDownloadFile,
}: {
  onOpenFile: () => void;
  onRenameFile: () => void;
  onDeleteFile: () => void;
  onCopySource: () => void;
  onDownloadFile: () => void;
}) {
  return (
    <nav className="absolute right-0 top-10 z-[999] flex w-56 flex-col gap-y-2 rounded-md bg-white py-2 shadow">
      <DropdownItem
        text="Lihat"
        icon={<FaRegEye size={18} />}
        onClick={() => onOpenFile()}
      />
      <DropdownItem
        text="Download"
        icon={<IoCloudDownloadOutline size={18} />}
        onClick={() => onDownloadFile()}
      />
      <DropdownItem
        text="Ganti Nama"
        icon={<MdOutlineDriveFileRenameOutline size={18} />}
        onClick={() => onRenameFile()}
      />
      <DropdownItem
        text="Salin Link"
        icon={<FiCopy size={18} />}
        onClick={() => onCopySource()}
      />
      <DropdownItem
        text="Hapus"
        icon={<FaRegTrashAlt size={15} />}
        onClick={() => onDeleteFile()}
      />
    </nav>
  );
}

type DropdownItemProps = {
  text: string;
  icon: React.ReactNode;
  onClick: () => void
}
function DropdownItem({ text, icon, onClick }: DropdownItemProps) {
  return (
    <div
      className="flex cursor-pointer items-center gap-x-2 px-3 py-2 text-gray-600 hover:bg-gray-200"
      onClick={() => onClick()}
    >
      <div className="flex h-6 w-6 items-center justify-center">{icon}</div>
      <span>{text}</span>
    </div>
  );
}
