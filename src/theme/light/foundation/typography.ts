import type { ThemeOptions } from "@mui/material";
import { THEME_COLOR_HELPERS } from "./colors";

const typography: ThemeOptions["typography"] = {
  fontFamily: [
    '"Poppins"',
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
  ].join(","),
  fontSize: 14,
  htmlFontSize: 15,
  h1: {
    fontWeight: 700,
    fontSize: 30,
  },
  h2: {
    fontWeight: 700,
    fontSize: 25,
  },
  h3: {
    fontWeight: 700,
    fontSize: 21,
    lineHeight: 1.4,
    color: THEME_COLOR_HELPERS.alpha.black[100],
  },
  h4: {
    fontWeight: 700,
    fontSize: 16,
  },
  h5: {
    fontWeight: 700,
    fontSize: 14,
  },
  h6: {
    fontSize: 15,
  },
  body1: {
    fontSize: 14,
  },
  body2: {
    fontSize: 14,
  },
  button: {
    fontSize: 14,
    fontWeight: 700,
  },
  caption: {
    fontSize: 13,
    textTransform: "uppercase",
    color: THEME_COLOR_HELPERS.alpha.black[50],
  },
  subtitle1: {
    fontSize: 14,
    color: THEME_COLOR_HELPERS.alpha.black[70],
  },
  subtitle2: {
    fontWeight: 400,
    fontSize: 15,
    color: THEME_COLOR_HELPERS.alpha.black[50],
  },
  overline: {
    fontSize: 13,
    fontWeight: 700,
    textTransform: "uppercase",
  },
};

export default typography;
