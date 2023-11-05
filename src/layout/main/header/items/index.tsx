import { Box } from "@mui/material";
import HeaderNotifications from "@/layout/main/header/items/Notifications";

function HeaderButtons() {
  return (
    <Box sx={{ mr: 1 }}>
      <HeaderNotifications />
    </Box>
  );
}

export default HeaderButtons;
