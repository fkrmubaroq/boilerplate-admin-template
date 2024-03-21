import { Modal } from "@/components/ui/modal";
import { useModal } from "@/hooks/hookStore";
import { useShallow } from "zustand/react/shallow";

export default function ModalForm() {
  const [show, hideModal] = useModal(useShallow(state => [state.show, state.hideModal]));
  return <Modal show={show} onHide={hideModal}>
    asdads
  </Modal>;
}