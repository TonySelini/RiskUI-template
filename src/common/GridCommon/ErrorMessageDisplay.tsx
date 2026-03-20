import { Stack, Typography } from "@mui/material";
import { COLORS } from "../../../utils/colors";

export default function ErrorMessageDisplay({
  errorMsg,
}: {
  errorMsg: string;
}) {
  return (
    <Stack
      sx={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="body2" color={COLORS.GREY400}>
        {errorMsg}
      </Typography>
    </Stack>
  );
}
