import { styled, Box, Button } from "@mui/material";
import type { OmediaTheme } from "@/theme/base";
import Title from "@/components/Title";
import Link from "next/link";

function Denied() {
  return (
    <Content>
      <Banner />
      <Title
        content={{
          type: "text",
          text: "Access Denied",
          color: "title.main",
          variant: "h2",
        }}
        subtitle={{ type: "text", text: "" }}
      />
      <Link href="/" passHref legacyBehavior>
        <Button variant="contained">Home</Button>
      </Link>
    </Content>
  );
}

export { Denied };

const Content = styled(Box)(({ theme }: OmediaTheme) => ({
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
  backgroundImage: "url(/assets/denied.svg)",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
});
