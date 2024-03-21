import style from "./layout.module.scss";
import { RiHome6Line } from "react-icons/ri";
import { MdOutlineInventory2 } from "react-icons/md";
import PingAnimation from "../ping";
import { CiBoxList } from "react-icons/ci";
import { TbUsersGroup } from "react-icons/tb";
import { CiShop } from "react-icons/ci";
import { TfiShoppingCart } from "react-icons/tfi";
import { LiaTruckLoadingSolid } from "react-icons/lia";
import { GoGear } from "react-icons/go";
import { BsClipboardData } from "react-icons/bs";
import { cn } from "@/lib/utils";
import { MdOutlinePermMedia } from "react-icons/md";
import { IoRemoveOutline } from "react-icons/io5";
import { redirect, useRouter } from "next/navigation";

type TMenuItem = { text: string, icon: React.ReactNode, link?: string };
type TWrapperMenu = { label: string;  menus: TMenuItem[] };
const menuList: TWrapperMenu[] = [
  {
    label: "Beranda",
    menus: [
      {
        text: "Dashboard",
        icon: <RiHome6Line size={20} />,
      },
    ],
  },
  {
    label: "Master",
    menus: [
      {
        text: "Produk",
        icon: <MdOutlineInventory2 size={20} />,
      },
      {
        text: "Kategori",
        icon: <CiBoxList size={20} />,
      },
      {
        text: "Marketplace",
        icon: <CiShop size={20} />,
      },
      {
        text: "Vendor",
        icon: <TbUsersGroup size={20} />,
      },
    ],
  },
  {
    label: "Transaksi",
    menus: [
      {
        text: "Barang Masuk",
        icon: <TfiShoppingCart size={20} />,
      },
      {
        text: "Barang Keluar",
        icon: <LiaTruckLoadingSolid size={20} />,
      },
    ],
  },
  {
    label: "Lainnya",
    menus: [
      {
        text: "Laporan",
        icon: <BsClipboardData size={20} />,
      },
      {
        text: "Media Manager",
        icon: <MdOutlinePermMedia size={20} />,
        link: "/admin/media-manager"
      },
      {
        text: "Pengaturan",
        icon: <GoGear size={20} />,
      },
    ],
  },
];
export default function Sidebar({ expand }: { expand:boolean }) {
  return (
    <div
      className={cn(style["sidebar"], { [style["sidebar--expand"]]: expand })}
    >
      <div className={cn(style["sidebar__logo"], { "justify-center": expand })}>
        <div className={cn("flex items-center gap-x-4 text-white", { "pl-5": !expand })}>
          <PingAnimation color="bg-white" width="w-3" height="h-3" />
          {!expand && (
            <div className="tracking-wide text-lg font-medium">Hyperrstore</div>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-y-6 px-5">
        {menuList.map((menu, key) => (
          <div key={key} className="flex flex-col gap-y-2">
            <div
              className={cn("uppercase text-xs text-gray-400 tracking-wide", {
                "flex justify-center": expand,
              })}
            >
              {expand ? (
                <IoRemoveOutline size={20} color="black" />
              ) : (
                menu.label
              )}
            </div>
            <div className="flex flex-col gap-y-1">
              {menu.menus.map((menu, key) => (
                <MenuItem key={key} data={menu} expand={expand} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MenuItem({ data, expand }: { data: TMenuItem, expand: boolean }) {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        console.log("data", data.link);
        data.link && router.push(data.link);
      }}
      className="flex gap-x-2.5 items-center transition-all duration-200 text-soft-gray text-[15px] px-3 cursor-pointer hover:bg-gray-100 py-2.5 hover:shadow-sm hover:text-gray-600 rounded-lg"
    >
      {data.icon}
      {!expand && <span className="tracking-wide text-sm">{data.text}</span>}
    </div>
  );
}
