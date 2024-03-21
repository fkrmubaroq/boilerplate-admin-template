import { ButtonProps } from ".";
import ButtonIcon from "./ButtonIcon";
import { RxPencil2 } from "react-icons/rx";

export default function ButtonEdit({ onClick, ...props }: React.ComponentPropsWithoutRef<"button">) {
  return (
    <ButtonIcon
      {...props}
      onClick={onClick}
      icon={RxPencil2}
      variant="ghost"
      text="Ubah"
      className="!gap-x-2"
    />
  );
}