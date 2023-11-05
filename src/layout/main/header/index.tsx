import Link from "next/link";
import Image from "next/image";
import { Box, Card, styled, Typography } from "@mui/material";
import UserBox from "@/layout/main/header/UserBox";
import { useRouter } from "next/router";
import { CoDriverTheme } from "@/theme/light";
import { useSession } from "next-auth/react";

function Header() {
  const router = useRouter();
  const { data: session, status } = useSession();

  return (
    <HeaderWrapper>
      <Box display="flex" alignItems="center" justifySelf="start"></Box>
      <Link href="/" passHref legacyBehavior>
        <Box
          display="flex"
          justifySelf="center"
          alignItems="center"
          sx={{ cursor: "pointer" }}
          py={2}
        >
          <Image
            height={70}
            width={120}
            alt="CoDrive"
            src="/assets/CoDrive_Logo.svg"
          />
        </Box>
      </Link>
      <Box display="flex" alignItems="center" justifySelf="end">
        {status === "authenticated" ? (
          <Box mr={3}>
            <UserBox placement="header" data={session} />
          </Box>
        ) : (
          <Box>
            <Typography
              mr={3}
              sx={{ color: "white", cursor: "pointer" }}
              fontSize={18}
              onClick={() => router.push("/login")}
            >
              Log In
            </Typography>
          </Box>
        )}
      </Box>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled(Card)(({ theme }: CoDriverTheme) => ({
  position: "fixed",
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gridTemplateRows: "auto",
  alignContent: "center",
  alignItems: "center",
  height: theme?.header.height,
  background: theme?.colors.secondary.main,
  width: "100%",
  right: 0,
  borderRadius: 0,
  zIndex: 10,
}));

export default Header;
