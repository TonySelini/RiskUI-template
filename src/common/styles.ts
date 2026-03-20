import { COLORS } from "../../utils/colors";

export const formRow = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  width: "100%",
  marginTop: "1rem",
};

export const commonButtonStyle = {
  border: "none",
  color: COLORS.BLUEGREY50,
  textAlign: "center",
  fontSize: "12px",
  cursor: "pointer",
  borderRadius: "0%",
};

export const primaryButtonStyle = {
  ...commonButtonStyle,
  backgroundColor: COLORS.INDIGO800,
};

export const secondaryButtonStyle = {
  ...commonButtonStyle,
  backgroundColor: COLORS.CYAN800,
};

export const errorButtonStyle = {
  ...commonButtonStyle,
  backgroundColor: COLORS.RED600,
};

export const disabledButtonStyle = {
  ...commonButtonStyle,
  backgroundColor: COLORS.GREYA400,
  cursor: "not-allowed",
};


export const commonFormProps = {
  margin: "dense" as const,
  size: "small" as const,
};