import { Box, styled } from "@mui/material";
import Title from "@/components/Title";
import { CoDriverTheme } from "@/theme/light";

function NotFound() {
  return (
    <Content>
      <Banner />
      <Title
        content={{ type: "text", text: "OOPSIE", color: "title.main" }}
        subtitle={{ type: "text", text: "Wrong Road" }}
      />
    </Content>
  );
}

export { NotFound };

const Content = styled(Box)(({ theme }: CoDriverTheme) => ({
  display: "flex",
  height: "100vh",
  backgroundColor: theme?.palette.background.paper,
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}));

const Banner = styled(Box)({
  width: "50%",
  height: "40%",
  backgroundImage: "url(/assets/404.svg)",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
});
