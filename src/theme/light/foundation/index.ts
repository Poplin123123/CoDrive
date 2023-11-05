import colors, { THEME_COLOR_HELPERS } from "./colors";
import typography from "./typography";
import palette from "./palette";
import breakpoints from "./breakpoints";
import shadows from "./shadows";

const foundation = {
  colors,
  typography,
  palette,
  breakpoints,
  shadows,
  general: {
    reactFrameworkColor: "#00D8FF",
    borderRadiusSm: "4px",
    borderRadius: "6px",
    borderRadiusLg: "10px",
    borderRadiusXl: "18px",
    borderRadiusCircle: "50%",
  },
  vacationSidebar: {
    width: "450px",
  },
  sidebar: {
    background: THEME_COLOR_HELPERS.layout.sidebar.background,
    textColor: THEME_COLOR_HELPERS.layout.sidebar.textColor,
    dividerBg: THEME_COLOR_HELPERS.layout.sidebar.dividerBg,
    menuItemColor: THEME_COLOR_HELPERS.layout.sidebar.menuItemColor,
    menuItemColorActive: THEME_COLOR_HELPERS.layout.sidebar.menuItemColorActive,
    menuItemBg: THEME_COLOR_HELPERS.layout.sidebar.menuItemBg,
    menuItemBgActive: THEME_COLOR_HELPERS.layout.sidebar.menuItemBgActive,
    menuItemIconColor: THEME_COLOR_HELPERS.layout.sidebar.menuItemIconColor,
    menuItemIconColorActive:
      THEME_COLOR_HELPERS.layout.sidebar.menuItemIconColorActive,
    menuItemHeadingColor:
      THEME_COLOR_HELPERS.layout.sidebar.menuItemHeadingColor,
    boxShadow:
      "2px 0 3px rgba(159, 162, 191, 0.18), 1px 0 1px rgba(159, 162, 191, 0.32)",
    width: "280px",
  },
  header: {
    height: "74px",
    background: THEME_COLOR_HELPERS.secondary.main,
    boxShadow: THEME_COLOR_HELPERS.shadows.cardSm,
    textColor: THEME_COLOR_HELPERS.secondary.main,
  },
  login: {
    sidebarWidth: "700px",
    sidebarBg: "#2a2a2d",
  },
  spacing: 8,
};

export default foundation;
