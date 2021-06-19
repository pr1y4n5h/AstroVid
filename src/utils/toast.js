import { toast } from "react-toastify";

export const toastText = (text) => {
  return toast.dark(text, {
    position: toast.POSITION.BOTTOM_CENTER,
    autoClose: 1000,
    draggablePercent: 60,
  });
};