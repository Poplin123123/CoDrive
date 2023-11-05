import {
  alpha,
  lighten,
  darken,
  ComponentsOverrides,
  CSSObject,
  Components,
} from "@mui/material";
import { THEME_COLORS, THEME_COLOR_HELPERS } from "../foundation/colors";

/**
 * TODO: tokyo theme split
 *
 *  theme has everything provided inside one file including everything,
 *  that is located inside `foundation`
 *  so feel free to split this object to separate files
 */

interface OmediaCustomComponentOverrides extends ComponentsOverrides {
  MuiCalendarPicker: CSSObject | string;
}

interface OmediaCustomComponents extends Components {
  MuiCalendarPicker?: {
    styleOverrides?: OmediaCustomComponentOverrides["MuiCalendarPicker"];
  };
}

const components: Partial<OmediaCustomComponents> = {
  MuiBackdrop: {
    styleOverrides: {
      root: {
        backgroundColor: alpha(darken(THEME_COLORS.primaryAlt, 0.4), 0.2),

        "&.MuiBackdrop-invisible": {
          backgroundColor: "transparent",
        },
      },
    },
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        textTransform: "none",
        marginLeft: 8,
        marginRight: 8,
        fontWeight: "bold",
      },
    },
  },
  MuiCssBaseline: {
    styleOverrides: {
      "html, body, #root": {
        width: "100%",
        height: "100%",
      },
      "#nprogress .bar": {
        background: THEME_COLOR_HELPERS.primary.main + "!important",
      },
      "#nprogress .spinner-icon": {
        borderTopColor: THEME_COLOR_HELPERS.primary.main + "!important",
        borderLeftColor: THEME_COLOR_HELPERS.primary.main + "!important",
      },
      "#nprogress .peg": {
        boxShadow:
          "0 0 10px " +
          THEME_COLOR_HELPERS.primary.main +
          ", 0 0 5px" +
          THEME_COLOR_HELPERS.primary.main,
      },
      ":root": {
        "--swiper-theme-color": THEME_COLOR_HELPERS.primary.main,
      },
      code: {
        background: THEME_COLOR_HELPERS.info.lighter,
        color: THEME_COLOR_HELPERS.info.dark,
        borderRadius: 4,
        padding: 4,
      },
      "@keyframes ripple": {
        "0%": {
          transform: "scale(.8)",
          opacity: 1,
        },
        "100%": {
          transform: "scale(2.8)",
          opacity: 0,
        },
      },
    },
  },
  MuiSelect: {
    styleOverrides: {
      iconOutlined: {
        color: THEME_COLOR_HELPERS.alpha.black[50],
      },
      icon: {
        top: "calc(50% - 14px)",
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: THEME_COLOR_HELPERS.alpha.black[50],
        },
        "&.Mui-focused:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: THEME_COLOR_HELPERS.primary.main,
        },
      },
    },
  },
  MuiListSubheader: {
    styleOverrides: {
      colorPrimary: {
        fontWeight: "bold",
        lineHeight: "40px",
        fontSize: 13,
        background: THEME_COLOR_HELPERS.alpha.black[5],
        color: THEME_COLOR_HELPERS.alpha.black[70],
      },
    },
  },
  MuiCardHeader: {
    styleOverrides: {
      action: {
        marginTop: -5,
        marginBottom: -5,
      },
      title: {
        fontSize: 15,
      },
    },
  },
  MuiRadio: {
    styleOverrides: {
      root: {
        borderRadius: "50px",
      },
    },
  },
  MuiChip: {
    styleOverrides: {
      colorSecondary: {
        background: THEME_COLOR_HELPERS.alpha.black[5],
        color: THEME_COLOR_HELPERS.alpha.black[100],

        "&:hover": {
          background: THEME_COLOR_HELPERS.alpha.black[10],
        },
      },
      deleteIcon: {
        color: THEME_COLOR_HELPERS.error.light,

        "&:hover": {
          color: THEME_COLOR_HELPERS.error.main,
        },
      },
    },
  },
  MuiAccordion: {
    styleOverrides: {
      root: {
        boxShadow: "none",

        "&.Mui-expanded": {
          margin: 0,
        },
        "&::before": {
          display: "none",
        },
      },
    },
  },
  MuiAvatar: {
    styleOverrides: {
      root: {
        fontSize: 14,
        fontWeight: "bold",
      },
      colorDefault: {
        background: THEME_COLOR_HELPERS.alpha.black[30],
        color: THEME_COLOR_HELPERS.alpha.white[100],
      },
    },
  },
  MuiAvatarGroup: {
    styleOverrides: {
      root: {
        alignItems: "center",
      },
      avatar: {
        background: THEME_COLOR_HELPERS.alpha.black[10],
        fontSize: 13,
        color: THEME_COLOR_HELPERS.alpha.black[70],
        fontWeight: "bold",

        "&:first-of-type": {
          border: 0,
          background: "transparent",
        },
      },
    },
  },
  MuiListItemAvatar: {
    styleOverrides: {
      alignItemsFlexStart: {
        marginTop: 0,
      },
    },
  },
  MuiPaginationItem: {
    styleOverrides: {
      page: {
        fontSize: 13,
        fontWeight: "bold",
        transition: "all .2s",
      },
      textPrimary: {
        "&.Mui-selected": {
          boxShadow: THEME_COLOR_HELPERS.shadows.primary,
        },
        "&.MuiButtonBase-root:hover": {
          background: THEME_COLOR_HELPERS.alpha.black[5],
        },
        "&.Mui-selected.MuiButtonBase-root:hover": {
          background: THEME_COLOR_HELPERS.primary.main,
        },
      },
    },
  },
  MuiButton: {
    defaultProps: {
      disableRipple: true,
    },
    styleOverrides: {
      root: {
        fontWeight: "bold",
        textTransform: "none",
        paddingLeft: 16,
        paddingRight: 16,

        ".MuiSvgIcon-root": {
          transition: "all .2s",
        },
      },
      endIcon: {
        marginRight: -8,
      },
      containedSecondary: {
        backgroundColor: THEME_COLOR_HELPERS.secondary.main,
        color: THEME_COLOR_HELPERS.alpha.white[100],
        border: "1px solid " + THEME_COLOR_HELPERS.alpha.black[30],
      },
      outlinedSecondary: {
        backgroundColor: THEME_COLOR_HELPERS.alpha.white[100],

        "&:hover, &.MuiSelected": {
          backgroundColor: THEME_COLOR_HELPERS.alpha.black[5],
          color: THEME_COLOR_HELPERS.alpha.black[100],
        },
      },
    },
  },
  MuiButtonBase: {
    defaultProps: {
      disableRipple: false,
    },
    styleOverrides: {
      root: {
        borderRadius: 6,
      },
    },
  },
  MuiToggleButton: {
    defaultProps: {
      disableRipple: true,
    },
    styleOverrides: {
      root: {
        color: THEME_COLOR_HELPERS.primary.main,
        background: THEME_COLOR_HELPERS.alpha.white[100],
        transition: "all .2s",

        "&:hover, &.Mui-selected, &.Mui-selected:hover": {
          color: THEME_COLOR_HELPERS.alpha.white[100],
          background: THEME_COLOR_HELPERS.primary.main,
        },
      },
    },
  },
  MuiIconButton: {
    styleOverrides: {
      root: {
        borderRadius: 6,

        "& .MuiTouchRipple-root": {
          borderRadius: 6,
        },
      },
      sizeSmall: {
        padding: 4,
      },
      sizeLarge: {
        padding: "14px 8px",
      },
    },
  },
  MuiListItemText: {
    styleOverrides: {
      root: {
        margin: 0,
      },
    },
  },
  MuiDivider: {
    styleOverrides: {
      root: {
        background: THEME_COLOR_HELPERS.alpha.black[10],
        border: 0,
        height: 1,
      },
      vertical: {
        height: "auto",
        width: 1,

        "&.MuiDivider-flexItem.MuiDivider-fullWidth": {
          height: "auto",
        },
        "&.MuiDivider-absolute.MuiDivider-fullWidth": {
          height: "100%",
        },
      },
      withChildren: {
        "&:before, &:after": {
          border: 0,
        },
      },
      wrapper: {
        background: THEME_COLOR_HELPERS.alpha.white[100],
        fontWeight: "bold",
        height: 24,
        lineHeight: "24px",
        marginTop: -12,
        color: "inherit",
        textTransform: "uppercase",
      },
    },
  },
  MuiPaper: {
    styleOverrides: {
      elevation0: {
        boxShadow: "none",
      },
      elevation: {
        boxShadow: THEME_COLOR_HELPERS.shadows.card,
      },
      elevation2: {
        boxShadow: THEME_COLOR_HELPERS.shadows.cardSm,
      },
      elevation24: {
        boxShadow: THEME_COLOR_HELPERS.shadows.cardLg,
      },
    },
  },
  MuiLinearProgress: {
    styleOverrides: {
      root: {
        borderRadius: 6,
        height: 6,
      },
    },
  },
  MuiSlider: {
    styleOverrides: {
      root: {
        "& .MuiSlider-valueLabelCircle, .MuiSlider-valueLabelLabel": {
          transform: "none",
        },
        "& .MuiSlider-valueLabelCircle": {
          borderRadius: 6,
          width: 54,
        },
        "& .MuiSlider-valueLabel": {
          left: "calc(-50% - 14px)",
          color: THEME_COLOR_HELPERS.alpha.black[100],
        },
      },
    },
  },
  MuiList: {
    styleOverrides: {
      root: {
        padding: 0,

        "& .MuiListItem-button": {
          transition: "all .2s",

          "& > .MuiSvgIcon-root": {
            minWidth: 34,
          },

          "& .MuiTouchRipple-root": {
            opacity: 0.2,
          },
        },
        "& .MuiListItem-root.MuiButtonBase-root.Mui-selected": {
          backgroundColor: THEME_COLOR_HELPERS.alpha.black[10],
        },
      },
      padding: {
        padding: "12px",

        "& .MuiListItem-button": {
          borderRadius: 6,
          margin: "1px 0",
        },
      },
    },
  },
  MuiTabs: {
    styleOverrides: {
      root: {
        height: 38,
        minHeight: 38,
        overflow: "visible",
      },
      indicator: {
        height: 38,
        minHeight: 38,
        borderRadius: 6,
        border: "1px solid " + THEME_COLOR_HELPERS.primary.dark,
        boxShadow: "0px 2px 10px " + THEME_COLOR_HELPERS.primary.light,
      },
      scrollableX: {
        overflow: "visible !important",
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        padding: 0,
        height: 38,
        minHeight: 38,
        borderRadius: 6,
        transition: "color .2s",
        textTransform: "capitalize",

        "&.MuiButtonBase-root": {
          minWidth: "auto",
          paddingLeft: 20,
          paddingRight: 20,
          marginRight: 4,
        },
        "&.Mui-selected, &.Mui-selected:hover": {
          color: THEME_COLOR_HELPERS.alpha.white[100],
          zIndex: 5,
        },
        "&:hover": {
          color: THEME_COLOR_HELPERS.alpha.black[100],
        },
      },
    },
  },
  MuiMenu: {
    styleOverrides: {
      paper: {
        padding: 12,
      },
      list: {
        padding: 12,

        "& .MuiListItem-button": {
          fontSize: 14,
          transition: "all .2s",
          color: THEME_COLOR_HELPERS.alpha.black[70],

          "&:hover, &:active, &.active, &.Mui-selected": {
            color: THEME_COLOR_HELPERS.alpha.black[100],
            background: lighten(THEME_COLOR_HELPERS.primary.lighter, 0.5),
          },
        },
      },
    },
  },
  MuiListItem: {
    styleOverrides: {
      button: {
        color: THEME_COLOR_HELPERS.secondary.main,

        "&:hover, &:active, &.active, &.Mui-selected": {
          color: THEME_COLOR_HELPERS.alpha.black[100],
          background: lighten(THEME_COLOR_HELPERS.primary.lighter, 0.5),
        },
      },
    },
  },
  MuiAutocomplete: {
    styleOverrides: {
      tag: {
        margin: 2,
      },
      root: {
        ".MuiAutocomplete-inputRoot.MuiOutlinedInput-root .MuiAutocomplete-endAdornment":
          {
            right: 14,
          },
      },
      clearIndicator: {
        background: THEME_COLOR_HELPERS.error.lighter,
        color: THEME_COLOR_HELPERS.error.main,
        marginRight: 8,

        "&:hover": {
          background: THEME_COLOR_HELPERS.error.lighter,
          color: THEME_COLOR_HELPERS.error.dark,
        },
      },
      popupIndicator: {
        color: THEME_COLOR_HELPERS.alpha.black[50],

        "&:hover": {
          background: THEME_COLOR_HELPERS.primary.lighter,
          color: THEME_COLOR_HELPERS.primary.main,
        },
      },
    },
  },
  MuiTablePagination: {
    styleOverrides: {
      toolbar: {
        "& .MuiIconButton-root": {
          padding: 8,
        },
      },
      select: {
        "&:focus": {
          backgroundColor: "transparent",
        },
      },
    },
  },
  MuiToolbar: {
    styleOverrides: {
      root: {
        minHeight: "0 !important",
        padding: "0 !important",
      },
    },
  },
  MuiTableRow: {
    styleOverrides: {
      head: {
        background: THEME_COLOR_HELPERS.alpha.black[5],
      },
      root: {
        transition: "background-color .2s",

        "&.MuiTableRow-hover:hover": {
          backgroundColor: lighten(THEME_COLOR_HELPERS.alpha.black[5], 0.5),
        },
      },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      root: {
        borderBottomColor: THEME_COLOR_HELPERS.alpha.black[10],
        fontSize: 14,
      },
      head: {
        textTransform: "uppercase",
        fontSize: 13,
        fontWeight: "bold",
        color: THEME_COLOR_HELPERS.alpha.black[70],
      },
    },
  },
  MuiAlert: {
    styleOverrides: {
      message: {
        lineHeight: 1.5,
        fontSize: 14,
      },
      standardInfo: {
        color: THEME_COLOR_HELPERS.info.main,
      },
      action: {
        color: THEME_COLOR_HELPERS.alpha.black[70],
      },
    },
  },
  // MuiTimeline: {
  //   styleOverrides: {
  //     alignLeft: {
  //       padding: 0,
  //       margin: 0,
  //     },
  //   },
  // },
  // MuiTimelineDot: {
  //   styleOverrides: {
  //     root: {
  //       margin: 0,
  //       zIndex: 5,
  //       position: "absolute",
  //       top: "50%",
  //       marginTop: -6,
  //       left: -6,
  //     },
  //     outlined: {
  //       backgroundColor: THEME_COLOR_HELPERS.alpha.white[100],
  //       boxShadow: "0 0 0 6px " + THEME_COLOR_HELPERS.alpha.white[100],
  //     },
  //     outlinedPrimary: {
  //       backgroundColor: THEME_COLOR_HELPERS.alpha.white[100],
  //       boxShadow: "0 0 0 6px " + THEME_COLOR_HELPERS.alpha.white[100],
  //     },
  //   },
  // },
  // MuiTimelineConnector: {
  //   styleOverrides: {
  //     root: {
  //       position: "absolute",
  //       height: "100%",
  //       top: 0,
  //       borderRadius: 50,
  //       backgroundColor: THEME_COLOR_HELPERS.alpha.black[10],
  //     },
  //   },
  // },
  // MuiTimelineItem: {
  //   styleOverrides: {
  //     root: {
  //       minHeight: 0,
  //       padding: "8px 0",
  //     },
  //     missingOppositeContent: {
  //       "&:before": {
  //         display: "none",
  //       },
  //     },
  //   },
  // },
  MuiTooltip: {
    styleOverrides: {
      tooltip: {
        backgroundColor: alpha(THEME_COLOR_HELPERS.alpha.black["100"], 0.95),
        padding: "8px 16px",
        fontSize: 13,
      },
      arrow: {
        color: alpha(THEME_COLOR_HELPERS.alpha.black["100"], 0.95),
      },
    },
  },
  MuiSwitch: {
    styleOverrides: {
      root: {
        height: 33,
        overflow: "visible",

        "& .MuiButtonBase-root": {
          position: "absolute",
          padding: 6,
          transition:
            "left 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        },
        "& .MuiIconButton-root": {
          borderRadius: 100,
        },
        "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
          opacity: 0.3,
        },
      },
      thumb: {
        backgroundColor: THEME_COLOR_HELPERS.alpha.white[100],
        border: "1px solid " + THEME_COLOR_HELPERS.alpha.black[30],
        boxShadow:
          "0px 9px 14px " +
          THEME_COLOR_HELPERS.alpha.black[10] +
          ", 0px 2px 2px " +
          THEME_COLOR_HELPERS.alpha.black[10],
      },
      track: {
        backgroundColor: THEME_COLOR_HELPERS.alpha.black[5],
        border: "1px solid " + THEME_COLOR_HELPERS.alpha.black[10],
        boxShadow: "inset 0px 1px 1px " + THEME_COLOR_HELPERS.alpha.black[10],
        opacity: 1,
      },
      colorPrimary: {
        "& .MuiSwitch-thumb": {
          backgroundColor: THEME_COLOR_HELPERS.alpha.white[100],
        },

        "&.Mui-checked .MuiSwitch-thumb": {
          backgroundColor: THEME_COLOR_HELPERS.primary.main,
        },
      },
    },
  },
  MuiStepper: {
    styleOverrides: {
      root: {
        paddingTop: 20,
        paddingBottom: 20,
        background: THEME_COLOR_HELPERS.alpha.black[5],
      },
    },
  },
  MuiStepIcon: {
    styleOverrides: {
      root: {
        "&.MuiStepIcon-completed": {
          color: THEME_COLOR_HELPERS.success.main,
        },
      },
    },
  },
  MuiTypography: {
    defaultProps: {
      variantMapping: {
        h1: "h1",
        h2: "h2",
        h3: "div",
        h4: "div",
        h5: "div",
        h6: "div",
        subtitle1: "div",
        subtitle2: "div",
        body1: "div",
        body2: "div",
      },
    },
    styleOverrides: {
      gutterBottom: {
        marginBottom: 4,
      },
      paragraph: {
        fontSize: 17,
        lineHeight: 1.7,
      },
    },
  },
};

export default components;
