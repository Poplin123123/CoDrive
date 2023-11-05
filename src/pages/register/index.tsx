import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
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
} from "@mui/material";

export default function Product() {
  const router = useRouter();

  const [showTermsAndConditions, setShowTermsAndConditions] = useState(false);

  return (
    <Page title="login">
      <Container
        sx={{
          background: "white",
          p: 3,
          width: "35%",
          margin: "auto",
          borderRadius: "5px",
        }}
      >
        <Box sx={{ mb: 4 }}>
          <Typography variant="h1" mb={1}>
            Create account
          </Typography>
          <Typography fontSize={"16px"} sx={{ color: "rgba(34, 51, 84, 0.7)" }}>
            Fill in the fields below to sign up for an account.
          </Typography>
        </Box>
        <Stack gap={2}>
          <TextField label="Name" fullWidth />
          <TextField label="Email address" fullWidth />
          <TextField label="Password" fullWidth type="password" />
        </Stack>
        <Stack direction="row" alignItems={"center"}>
          <FormGroup sx={{ mt: 1 }}>
            <FormControlLabel
              sx={{ marginRight: 0.5 }}
              control={<Checkbox defaultChecked />}
              label={<Typography>I accept the </Typography>}
            />
          </FormGroup>
          <Typography
            mt={1}
            onClick={() => setShowTermsAndConditions(true)}
            sx={{ cursor: "pointer", color: "#3f9d00" }}
            fontWeight={600}
          >
            terms and conditions.
          </Typography>
        </Stack>
        <Button
          variant="contained"
          size="large"
          fullWidth
          sx={{ my: 4, color: "white" }}
        >
          Create your account
        </Button>
        <Stack direction="row" spacing={1}>
          <Typography variant="h3" fontWeight={700} fontSize={15}>
            Already have an account?
          </Typography>
          <Typography
            sx={{
              color: "#3f9d00",
              textDecoration: "underline",
              textDecorationColor: "#3f9d00",
              cursor: "pointer",
            }}
            fontWeight={700}
            onClick={() => router.push("login")}
          >
            Sign in here
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
