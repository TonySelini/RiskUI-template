import { Zoom, type ToastPosition } from "react-toastify";

export const commonToast = {
  autoClose: 3000,
  transition: Zoom,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "dark",
  position: "top-right" as ToastPosition,
};

export const failedToast = {
  autoClose: false as const,
  transition: Zoom,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "dark",
  position: "top-right" as ToastPosition,
};
