import { ReactNode } from "react";
import { Box, IconButton, Typography, styled } from "@mui/material";
import { Close } from "@mui/icons-material";
import { CoDriverTheme } from "@/theme/light";

interface IProps {
  title: ReactNode;
  color: string;
  onClose: () => void;
  backgroundColor?: string;
}

function BaseDrawerHeader({ title, color, backgroundColor, onClose }: IProps) {
  return (
    <HeaderWrapper
      sx={{
        color: color,
        borderBottom: "4px solid " + color,
        backgroundColor: backgroundColor,
      }}
    >
      <CloseIconWrapper>
        <IconButton
          onClick={onClose}
          aria-label="close drawer"
          edge="start"
          sx={{ borderRadius: "50%" }}
        >
          <X />
        </IconButton>
      </CloseIconWrapper>
      <Typography
        sx={{
          color: color,
        }}
        variant="h3"
        noWrap
      >
        {title}
      </Typography>
    </HeaderWrapper>
  );
}

export { BaseDrawerHeader };

const HeaderWrapper = styled(Box)(({ theme }: CoDriverTheme) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px",
  height: theme?.header.height,
}));

const CloseIconWrapper = styled(Box)(({ theme }: CoDriverTheme) => ({
  position: "absolute",
  left: theme?.spacing(2),
  color: theme?.colors.alpha.black[70],
  "&.MuiIconButton-sizeMedium": {
    borderRadius: "50% !important",
  },
  [theme?.breakpoints.up("xs") as string]: {
    display: "block",
  },
}));

const X = styled(Close)(({ theme }: CoDriverTheme) => ({
  color: theme?.palette.info.contrastText,
}));
