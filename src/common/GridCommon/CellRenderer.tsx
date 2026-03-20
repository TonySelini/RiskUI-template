import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Stack, Typography } from "@mui/material";
import { COLORS } from "../../../utils/colors";

export const BooleanCellRenderer = (params: any) => {
  return (
    <Stack justifyContent="center" alignItems='center' height='100%'>
      {params.value ? (
        <CheckCircleIcon sx={{ color: COLORS.GREEN500, height: "20px" }} />
      ) : (
        <CancelIcon sx={{ color: COLORS.RED500, height: "20px" }} />
      )}
    </Stack>
  );
};

export const ObjectCellRenderer = (params: any) => {
  return (
    <Stack>
      <Typography>{JSON.stringify(params.value)}</Typography>
    </Stack>
  );
};
