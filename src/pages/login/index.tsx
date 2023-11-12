import WarningModal from "@/components/Modal/Dialog";
import Page from "@/components/Page";
import {
  Box,
  Container,
  TextField,
  Typography,
  FormGroup,
  Checkbox,
  FormControlLabel,
  Button,
  Stack,
  styled,
  darken,
  useTheme,
} from "@mui/material";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";
import { CoDriverTheme } from "@/theme/light";
import Image from "next/image";

export default function Product() {
  const router = useRouter();
  const theme = useTheme();

  const [showTermsAndConditions, setShowTermsAndConditions] = useState(false);

  return (
    <Page title="login">
      <Container
        sx={{
          background: "white",
          p: 4,
          width: "35%",
          borderRadius: "5px",
        }}
      >
        <Box sx={{ mb: 4 }}>
          <Typography variant="h1" mb={1}>
            Sign In
          </Typography>
          <Typography fontSize={"16px"} sx={{ color: "rgba(34, 51, 84, 0.7)" }}>
            Fill in the fields below to sign up for an account.
          </Typography>
        </Box>
        <Stack gap={3}>
          <TextField label="Email address" fullWidth />
          <TextField label="Password" fullWidth type="password" />
        </Stack>
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent={"flex-end"}
          my={2}
        >
          <Typography
            fontWeight={700}
            onClick={() => router.push("forgot-password")}
            sx={{ cursor: "pointer", color: theme.palette.primary.main }}
          >
            Forgot password?
          </Typography>
        </Stack>
        <Button
          variant="contained"
          size="large"
          fullWidth
          sx={{ mb: 2, color: "white" }}
        >
          Create your account
        </Button>
        <Stack direction="row" spacing={1}>
          <Typography variant="h3" fontWeight={700} fontSize={15}>
            Don’t have an account, yet?
          </Typography>
          <Typography
            sx={{
              color: theme.palette.primary.main,
              textDecoration: "underline",
              textDecorationColor: theme.palette.primary.main,
              cursor: "pointer",
            }}
            fontWeight={700}
            onClick={() => router.push("register")}
          >
            Sign up here
          </Typography>
        </Stack>
      </Container>
      <WarningModal
        open={showTermsAndConditions}
        onSubmit={() => setShowTermsAndConditions(false)}
        text={`Are you agree with that? 
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
        buttonNames={{
          cancelButton: "",
          submitButton: "Agree",
        }}
      />
    </Page>
  );
}

const GGButton = styled(Button)(({ theme }: CoDriverTheme) => ({
  backgroundColor: theme?.palette.background.default,
  color: theme?.palette.common.black,
  margin: "2.5rem 0rem 0.7rem",
  fontWeight: 600,

  "&:hover": {
    backgroundColor: darken(theme?.palette.background.default as string, 0.2),
  },
}));
