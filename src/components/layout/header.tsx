import style from "./layout.module.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineUser } from "react-icons/ai";
import { RxCaretDown } from "react-icons/rx";
import AppProps from "../../../typss/global";

export default function Header({
  expand,
  setExpand,
  title
}: {
  title: string,
  expand: boolean;
  setExpand: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <header className={style["header"]}>
      <div className="flex items-center">
        <div
          className="w-12 h-12 cursor-pointer flex justify-center items-center"
          onClick={() => setExpand((o) => !o)}
          >
          <RxHamburgerMenu color="white" />
        </div>
        {title && <span className="text-white">{title}</span>}
      </div>
      
      <div className="flex gap-x-2 items-center text-white hover:opacity-70 cursor-pointer">
        <AiOutlineUser color="white" size={20} />
        <span className="text-sm">Andre Tobias</span>
        <RxCaretDown size={15} color="white" />
      </div>
    </header>
  );
}