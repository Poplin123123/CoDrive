import { createTheme, Theme, SxProps } from "@mui/material";
import foundation from "./foundation";
import components from "./components";
import { ElementType } from "react";

const merged = { ...foundation, components: components };
const theme = createTheme(merged);

export interface CoDriverTheme {
  theme?: typeof merged & Theme;
  sx?: SxProps<Theme>;
  as?: ElementType;
}

export default theme;
