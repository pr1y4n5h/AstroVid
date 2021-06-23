import { toast } from "react-toastify";

export function toastText(text) {
  return toast.dark(text, {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 1000,
    draggablePercent: 60,
  });
};

