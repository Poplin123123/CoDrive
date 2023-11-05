import { alpha, lighten, darken } from "@mui/material";
// import "@mui/lab/themeAugmentation";

// Green
// #73d700
// #5cc500
// #31a100
// #187d00

const THEME_COLORS = {
  primary: "#0b5394",
  secondary: "#073762",
  success: "#44D600",
  warning: "#FFA319",
  error: "#FF1943",
  info: "#33C2FF",
  black: "#343a40",
  white: "#ffffff",
  lightGray: "#52555b",
  darkGray: "#1d1e20",
  primaryAlt: "#000C57",
  bluish: "#537895",
  bluishDarker: "#09203f",
};

const THEME_COLOR_HELPERS = {
  gradients: {
    blue1: "linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)",
    blue2: "linear-gradient(135deg, #ABDCFF 0%, #0396FF 100%)",
    blue3: "linear-gradient(127.55deg, #141E30 3.73%, #243B55 92.26%)",
    orange1: "linear-gradient(135deg, #FCCF31 0%, #F55555 100%)",
    orange2: "linear-gradient(135deg, #FFD3A5 0%, #FD6585 100%)",
    purple1: "linear-gradient(135deg, #43CBFF 0%, #9708CC 100%)",
    pink1: "linear-gradient(135deg, #F6CEEC 0%, #D939CD 100%)",
    pink2: "linear-gradient(135deg, #F761A1 0%, #8C1BAB 100%)",
    green1: "linear-gradient(135deg, #FFF720 0%, #3CD500 100%)",
    black1: "linear-gradient(100.66deg, #434343 6.56%, #000000 93.57%)",
    gray1: "linear-gradient(25deg, #7f878c 0%, #cdd8df 100%)",
    bluish1: "linear-gradient(315deg, #537895 0%, #09203f 74%)",
  },
  shadows: {
    success:
      "0px 1px 4px rgba(68, 214, 0, 0.25), 0px 3px 12px 2px rgba(68, 214, 0, 0.35)",
    error:
      "0px 1px 4px rgba(255, 25, 67, 0.25), 0px 3px 12px 2px rgba(255, 25, 67, 0.35)",
    info: "0px 1px 4px rgba(51, 194, 255, 0.25), 0px 3px 12px 2px rgba(51, 194, 255, 0.35)",
    primary:
      "0px 1px 4px rgba(85, 105, 255, 0.25), 0px 3px 12px 2px rgba(85, 105, 255, 0.35)",
    warning:
      "0px 1px 4px rgba(255, 163, 25, 0.25), 0px 3px 12px 2px rgba(255, 163, 25, 0.35)",
    card: "0px 9px 16px rgba(159, 162, 191, 0.18), 0px 2px 2px rgba(159, 162, 191, 0.32)",
    cardSm:
      "0px 2px 3px rgba(159, 162, 191, 0.18), 0px 1px 1px rgba(159, 162, 191, 0.32)",
    cardLg:
      "0 5rem 14rem 0 rgb(255 255 255 / 30%), 0 0.8rem 2.3rem rgb(0 0 0 / 60%), 0 0.2rem 0.3rem rgb(0 0 0 / 45%)",
  },
  layout: {
    general: {
      bodyBg: "#F6F8FB",
    },
    sidebar: {
      background: THEME_COLORS.white,
      textColor: THEME_COLORS.secondary,
      dividerBg: "#F6F8FB",
      menuItemColor: "#242E6F",
      menuItemColorActive: THEME_COLORS.primary,
      menuItemBg: "transparent",
      menuItemBgActive: "#F6F8FB",
      menuItemIconColor: lighten(THEME_COLORS.secondary, 0.3),
      menuItemIconColorActive: THEME_COLORS.primary,
      menuItemHeadingColor: THEME_COLORS.secondary,
    },
  },
  alpha: {
    white: {
      5: alpha(THEME_COLORS.white, 0.02),
      10: alpha(THEME_COLORS.white, 0.1),
      30: alpha(THEME_COLORS.white, 0.3),
      50: alpha(THEME_COLORS.white, 0.5),
      70: alpha(THEME_COLORS.white, 0.7),
      100: THEME_COLORS.white,
    },
    trueWhite: {
      5: alpha(THEME_COLORS.white, 0.02),
      10: alpha(THEME_COLORS.white, 0.1),
      30: alpha(THEME_COLORS.white, 0.3),
      50: alpha(THEME_COLORS.white, 0.5),
      70: alpha(THEME_COLORS.white, 0.7),
      100: THEME_COLORS.white,
    },
    black: {
      5: alpha(THEME_COLORS.black, 0.02),
      10: alpha(THEME_COLORS.black, 0.1),
      30: alpha(THEME_COLORS.black, 0.3),
      50: alpha(THEME_COLORS.black, 0.5),
      70: alpha(THEME_COLORS.black, 0.7),
      100: THEME_COLORS.black,
    },
    lightGray: {
      5: alpha(THEME_COLORS.lightGray, 0.02),
      10: alpha(THEME_COLORS.lightGray, 0.1),
      30: alpha(THEME_COLORS.lightGray, 0.3),
      50: alpha(THEME_COLORS.lightGray, 0.5),
      70: alpha(THEME_COLORS.lightGray, 0.7),
      100: THEME_COLORS.lightGray,
    },
    darkGray: {
      5: alpha(THEME_COLORS.darkGray, 0.02),
      10: alpha(THEME_COLORS.darkGray, 0.1),
      30: alpha(THEME_COLORS.darkGray, 0.3),
      50: alpha(THEME_COLORS.darkGray, 0.5),
      70: alpha(THEME_COLORS.darkGray, 0.7),
      100: THEME_COLORS.darkGray,
    },
  },
  secondary: {
    lighter: lighten(THEME_COLORS.secondary, 0.85),
    light: lighten(THEME_COLORS.secondary, 0.3),
    main: THEME_COLORS.secondary,
    dark: darken(THEME_COLORS.secondary, 0.2),
  },
  primary: {
    lighter: lighten(THEME_COLORS.primary, 0.85),
    light: lighten(THEME_COLORS.primary, 0.3),
    main: THEME_COLORS.primary,
    dark: darken(THEME_COLORS.primary, 0.2),
  },
  success: {
    lighter: lighten(THEME_COLORS.success, 0.85),
    light: lighten(THEME_COLORS.success, 0.3),
    main: THEME_COLORS.success,
    dark: darken(THEME_COLORS.success, 0.2),
  },
  warning: {
    lighter: lighten(THEME_COLORS.warning, 0.85),
    light: lighten(THEME_COLORS.warning, 0.3),
    main: THEME_COLORS.warning,
    dark: darken(THEME_COLORS.warning, 0.2),
  },
  error: {
    lighter: lighten(THEME_COLORS.error, 0.85),
    light: lighten(THEME_COLORS.error, 0.3),
    main: THEME_COLORS.error,
    dark: darken(THEME_COLORS.error, 0.2),
  },
  info: {
    lighter: lighten(THEME_COLORS.info, 0.85),
    light: lighten(THEME_COLORS.info, 0.3),
    main: THEME_COLORS.info,
    dark: darken(THEME_COLORS.info, 0.2),
  },
};

const colors = {
  gradients: {
    blue1: THEME_COLOR_HELPERS.gradients.blue1,
    blue2: THEME_COLOR_HELPERS.gradients.blue2,
    blue3: THEME_COLOR_HELPERS.gradients.blue3,
    orange1: THEME_COLOR_HELPERS.gradients.orange1,
    orange2: THEME_COLOR_HELPERS.gradients.orange2,
    purple1: THEME_COLOR_HELPERS.gradients.purple1,
    pink1: THEME_COLOR_HELPERS.gradients.pink1,
    pink2: THEME_COLOR_HELPERS.gradients.pink2,
    green1: THEME_COLOR_HELPERS.gradients.green1,
    black1: THEME_COLOR_HELPERS.gradients.black1,
    gray1: THEME_COLOR_HELPERS.gradients.gray1,
    bluish1: THEME_COLOR_HELPERS.gradients.bluish1,
  },
  shadows: {
    success: THEME_COLOR_HELPERS.shadows.success,
    error: THEME_COLOR_HELPERS.shadows.error,
    primary: THEME_COLOR_HELPERS.shadows.primary,
    warning: THEME_COLOR_HELPERS.shadows.warning,
  },
  alpha: {
    white: {
      5: alpha(THEME_COLORS.white, 0.02),
      10: alpha(THEME_COLORS.white, 0.1),
      30: alpha(THEME_COLORS.white, 0.3),
      50: alpha(THEME_COLORS.white, 0.5),
      70: alpha(THEME_COLORS.white, 0.7),
      100: THEME_COLORS.white,
    },
    trueWhite: {
      5: alpha(THEME_COLORS.white, 0.02),
      10: alpha(THEME_COLORS.white, 0.1),
      30: alpha(THEME_COLORS.white, 0.3),
      50: alpha(THEME_COLORS.white, 0.5),
      70: alpha(THEME_COLORS.white, 0.7),
      100: THEME_COLORS.white,
    },
    black: {
      5: alpha(THEME_COLORS.black, 0.02),
      10: alpha(THEME_COLORS.black, 0.1),
      30: alpha(THEME_COLORS.black, 0.3),
      50: alpha(THEME_COLORS.black, 0.5),
      70: alpha(THEME_COLORS.black, 0.7),
      100: THEME_COLORS.black,
    },
    lightGray: {
      5: alpha(THEME_COLORS.lightGray, 0.02),
      10: alpha(THEME_COLORS.lightGray, 0.1),
      30: alpha(THEME_COLORS.lightGray, 0.3),
      50: alpha(THEME_COLORS.lightGray, 0.5),
      70: alpha(THEME_COLORS.lightGray, 0.7),
      100: THEME_COLORS.lightGray,
    },
    darkGray: {
      5: alpha(THEME_COLORS.darkGray, 0.02),
      10: alpha(THEME_COLORS.darkGray, 0.1),
      30: alpha(THEME_COLORS.darkGray, 0.3),
      50: alpha(THEME_COLORS.darkGray, 0.5),
      70: alpha(THEME_COLORS.darkGray, 0.7),
      100: THEME_COLORS.darkGray,
    },
  },
  secondary: {
    lighter: alpha(THEME_COLORS.secondary, 0.1),
    light: lighten(THEME_COLORS.secondary, 0.3),
    main: THEME_COLORS.secondary,
    dark: darken(THEME_COLORS.secondary, 0.2),
  },
  primary: {
    lighter: alpha(THEME_COLORS.primary, 0.1),
    light: lighten(THEME_COLORS.primary, 0.3),
    main: THEME_COLORS.primary,
    dark: darken(THEME_COLORS.primary, 0.2),
  },
  success: {
    lighter: alpha(THEME_COLORS.success, 0.1),
    light: lighten(THEME_COLORS.success, 0.3),
    main: THEME_COLORS.success,
    dark: darken(THEME_COLORS.success, 0.2),
  },
  warning: {
    lighter: alpha(THEME_COLORS.warning, 0.1),
    light: lighten(THEME_COLORS.warning, 0.3),
    main: THEME_COLORS.warning,
    dark: darken(THEME_COLORS.warning, 0.2),
  },
  error: {
    lighter: alpha(THEME_COLORS.error, 0.1),
    light: lighten(THEME_COLORS.error, 0.3),
    main: THEME_COLORS.error,
    dark: darken(THEME_COLORS.error, 0.2),
  },
  info: {
    lighter: alpha(THEME_COLORS.info, 0.1),
    light: lighten(THEME_COLORS.info, 0.3),
    main: THEME_COLORS.info,
    dark: darken(THEME_COLORS.info, 0.2),
  },
  blue: {
    main: THEME_COLORS.bluish,
    darker: THEME_COLORS.bluishDarker,
  },
};

export default colors;

export { THEME_COLORS, THEME_COLOR_HELPERS };
