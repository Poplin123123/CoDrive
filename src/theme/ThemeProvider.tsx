import LightTheme from "./light";
import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";
import { ReactElement } from "react";

type IProps = {
  children: ReactElement[] | ReactElement;
};

function ThemeProvider({ children }: IProps) {
  return (
    <MuiThemeProvider theme={LightTheme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}

export default ThemeProvider;
