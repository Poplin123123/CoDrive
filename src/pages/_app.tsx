import "nprogress/nprogress.css";
import { HelmetProvider } from "react-helmet-async";
import { SnackbarProvider } from "notistack";
import type { AppProps as NextAppProps } from "next/app";
import "../styles/global.css";
import MainLayout from "@/layout/main";
import ThemeProvider from "@/theme/ThemeProvider";
import { SessionProvider } from "next-auth/react";

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: NextAppProps & {}) {
  const helmetContext = {};

  return (
    <HelmetProvider context={helmetContext}>
      <ThemeProvider>
        <SessionProvider session={session}>
          <div style={{ margin: 0 }}>
            <SnackbarProvider
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
            >
              <MainLayout>
                <div style={{ marginTop: "7rem" }}>
                  <Component {...pageProps} />
                </div>
              </MainLayout>
            </SnackbarProvider>
          </div>
        </SessionProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default MyApp;
