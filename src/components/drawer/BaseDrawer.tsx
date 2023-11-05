import { Box, Drawer, Breakpoint, styled } from "@mui/material";
import { OmediaTheme } from "@/theme/base";
import { ReactNode } from "react";

interface IProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

function BaseDrawer({ onClose, children, open }: IProps) {
  return (
    <DrawerWrapper
      anchor="right"
      open={open}
      onClose={onClose}
      variant="temporary"
      elevation={9}
    >
      <Sidebar
        sx={{
          width: {
            xs: "100%",
            xsm: "450px",
          },
        }}
      >
        {children}
      </Sidebar>
    </DrawerWrapper>
  );
}

const DrawerWrapper = styled(Drawer)(({ theme }: OmediaTheme) => ({
  "& .MuiPaper-root": {
    flexDirection: "column",
    alignItems: "center",

    [theme?.breakpoints.up("xs") as Breakpoint]: {
      width: "100%",
      display: "flex",
    },

    [theme?.breakpoints.up("sm") as Breakpoint]: {
      width: "450px",
      display: "block",
    },
  },
}));

const Sidebar = styled(Box)(({ theme }: OmediaTheme) => ({
  position: "relative",
  height: "100%",
  overflowX: "hidden",
  color: theme?.sidebar.textColor,
  zIndex: "5",
}));

export { BaseDrawer };
