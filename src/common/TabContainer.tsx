import { Box } from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: string;
  value: string;
}

export default function TabContainer(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      sx={{
        flex: 1,
        minHeight: 0,
        overflow: "auto",
        height: "100%",
        display: value === index ? "block" : "none",
      }}
      {...other}
    >
      {children}
    </Box>
  );
}
