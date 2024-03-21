import { create } from "zustand";

type ModalState = {
  files: string[];
  show: boolean;
  showModal: (files: string) => void;
  hideModal: () => void;
}

export const useModal = create<ModalState>((set) => ({
  files: [],
  show: false,  
  showModal: (file) => set(state => ({ ...state, show:true, files:[...state.files, file] })),
  hideModal: () => set(state => ({ ...state, show:false, files: state.files.slice(0, state.files.length - 1) })),
}))