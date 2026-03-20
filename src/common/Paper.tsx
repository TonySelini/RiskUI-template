import { Paper, type PaperProps } from "@mui/material";
import { useRef } from "react";
import Draggable from "react-draggable";

function PaperComponent({ key, ...restProps }: PaperProps) {
  const nodeRef = useRef<HTMLDivElement>(null);
  return (
    <Draggable
      nodeRef={nodeRef}
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper
        key={key}
        {...restProps}
        ref={nodeRef}
        sx={{ width: "100%", ...restProps.sx }}
      />
    </Draggable>
  );
}

export default PaperComponent;
