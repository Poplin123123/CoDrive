import type { PaletteOptions } from "@mui/material";
import { THEME_COLORS, THEME_COLOR_HELPERS } from "./colors";

interface PaletteExtendedOptions extends PaletteOptions {
  title: {
    primary: string;
    secondary: string;
    info: string;
    main: string;
  };
}

const palette: PaletteExtendedOptions = {
  common: {
    black: THEME_COLOR_HELPERS.alpha.black[100],
    white: THEME_COLOR_HELPERS.alpha.white[100],
  },
  mode: "light",
  primary: {
    light: THEME_COLOR_HELPERS.primary.light,
    main: THEME_COLOR_HELPERS.primary.main,
    dark: THEME_COLOR_HELPERS.primary.dark,
  },
  secondary: {
    light: THEME_COLOR_HELPERS.secondary.light,
    main: THEME_COLOR_HELPERS.secondary.main,
    dark: THEME_COLOR_HELPERS.secondary.dark,
  },
  error: {
    light: THEME_COLOR_HELPERS.error.light,
    main: THEME_COLOR_HELPERS.error.main,
    dark: THEME_COLOR_HELPERS.error.dark,
    contrastText: THEME_COLOR_HELPERS.alpha.white[100],
  },
  success: {
    light: THEME_COLOR_HELPERS.success.light,
    main: THEME_COLOR_HELPERS.success.main,
    dark: THEME_COLOR_HELPERS.success.dark,
    contrastText: THEME_COLOR_HELPERS.alpha.white[100],
  },
  info: {
    light: THEME_COLOR_HELPERS.info.light,
    main: THEME_COLOR_HELPERS.info.main,
    dark: THEME_COLOR_HELPERS.info.dark,
    contrastText: THEME_COLOR_HELPERS.alpha.white[100],
  },
  warning: {
    light: THEME_COLOR_HELPERS.warning.light,
    main: THEME_COLOR_HELPERS.warning.main,
    dark: THEME_COLOR_HELPERS.warning.dark,
    contrastText: THEME_COLOR_HELPERS.alpha.white[100],
  },
  grey: {
    50: "#FBFBFB",
    100: "#F3F5F6",
    200: "#E8EAED",
    300: "#DCE0E5",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#d5d5d5",
    A200: "#aaaaaa",
    A400: "#303030",
    A700: "#616161",
  },
  text: {
    primary: THEME_COLOR_HELPERS.alpha.black[100],
    secondary: THEME_COLOR_HELPERS.alpha.black[70],
    disabled: THEME_COLOR_HELPERS.alpha.black[50],
  },
  title: {
    primary: THEME_COLORS.lightGray,
    secondary: THEME_COLOR_HELPERS.alpha.lightGray[70],
    info: THEME_COLORS.info,
    main: THEME_COLORS.primary,
  },
  background: {
    paper: THEME_COLOR_HELPERS.alpha.white[100],
    default: THEME_COLOR_HELPERS.layout.general.bodyBg,
  },
  action: {
    active: THEME_COLOR_HELPERS.alpha.black[100],
    hover: THEME_COLOR_HELPERS.primary.lighter,
    hoverOpacity: 0.1,
    selected: THEME_COLOR_HELPERS.alpha.black[10],
    selectedOpacity: 0.1,
    disabled: THEME_COLOR_HELPERS.alpha.black[50],
    disabledBackground: THEME_COLOR_HELPERS.alpha.black[5],
    disabledOpacity: 0.38,
    focus: THEME_COLOR_HELPERS.alpha.black[10],
    focusOpacity: 0.05,
    activatedOpacity: 0.12,
  },
  tonalOffset: 0.5,
};

export default palette;
