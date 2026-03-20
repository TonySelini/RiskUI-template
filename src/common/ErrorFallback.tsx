import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import { Box, Button, Paper, Typography } from "@mui/material";
import { COLORS } from "../utils/colors";

export function ErrorFallback({
  error,
  resetErrorBoundary,
}: {
  error: unknown;
  resetErrorBoundary: () => void;
}) {
  return (
    <Paper
      elevation={6}
      sx={{
        p: 4,
        width: "100%",
        height: "100%",
        backgroundColor: COLORS.GREY900,
        color: "#fff",
        textAlign: "center",
      }}
    >
      <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
        <ReportProblemIcon sx={{ fontSize: 48, color: COLORS.RED600 }} />
        <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
          Oops! Something went wrong. Please contact support.
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#f44336",
            wordBreak: "break-all",
            fontFamily: "monospace",
            mb: 2,
            whiteSpace: "pre-wrap",
          }}
        >
          {error instanceof Error ? error.message : String(error)}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={resetErrorBoundary}
          sx={{ borderRadius: 0, mt: 2, fontWeight: 500, px: 3 }}
        >
          Try Again
        </Button>
      </Box>
    </Paper>
  );
}
