import {
  Dialog,
  DialogTitle,
  IconButton,
  type DialogProps,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { RGBACOLORS } from "../../utils/colors";

interface BaseDialogProps extends DialogProps {
  setIsOpen: (open: boolean) => void;
  title?: string;
}
export default function DialogWrapper({
  setIsOpen,
  onClose,
  title,
  children,
  ...props
}: BaseDialogProps) {
  const handleClose: DialogProps["onClose"] = (e, reason) => {
    if (reason === "backdropClick") return;
    setIsOpen(false);
    onClose?.(e, reason);
  };

  return (
    <Dialog {...props} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <IconButton
        onClick={(e) => handleClose(e, "escapeKeyDown")}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: "error.main",
          borderRadius: 0,
          "&:hover": {
            backgroundColor: RGBACOLORS.RED600_08,
          },
        }}
      >
        <CloseIcon />
      </IconButton>
      {children}
    </Dialog>
  );
}
