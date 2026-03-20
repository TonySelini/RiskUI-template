import { PanelResizeHandle } from "react-resizable-panels";

export default function ResizeHandle({
  className = "",
  id,
}: {
  className?: string;
  id?: string;
}) {
  return (
    <PanelResizeHandle
      style={{
        flex: "0 0 4px",
        background: "rgb(98, 98, 98)",
        borderRadius: "4px",
      }}
      id={id}
      className={className}
    ></PanelResizeHandle>
  );
}
