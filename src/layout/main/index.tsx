import { ReactNode } from "react";
import { Box, styled } from "@mui/material";
// import Sidebar from "@/layout/main/sidebar";
import Header from "@/layout/main/header";
import { HelmetProvider } from "react-helmet-async";
import { SidebarProvider } from "@/context/sidebar";
// import { SidebarProvider } from "@/context/sidebar";

type IProps = {
  children: ReactNode;
};

function MainLayout({ children }: IProps) {
  return (
    <SidebarProvider>
      <Header />
      <MainWrapper>
        <MainContent id="content">{children}</MainContent>
      </MainWrapper>
    </SidebarProvider>
  );
}

// Green
// #73d700
// #5cc500
// #31a100
// #187d00

const MainWrapper = styled(Box)({
  flex: "1 1 auto",
  display: "flex",
  height: "100vh",
});

const MainContent = styled(Box)({
  flex: "1 1 auto",
  overflow: "auto",
  padding: "0 2em 0 2em",
});

export default MainLayout;
