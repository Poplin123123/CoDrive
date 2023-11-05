import { ReactNode } from "react";
import { Box, styled } from "@mui/material";

type IProps = {
  children: ReactNode;
};

function MainLayout({ children }: IProps) {
  return (
    <MainWrapper>
      <MainContent id="content">{children}</MainContent>
    </MainWrapper>
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
  background: "#73d700",
});

const MainContent = styled(Box)({
  marginTop: "74px",
  flex: "1 1 auto",
  overflow: "auto",
});

export default MainLayout;
