import { CoDriverTheme } from "@/theme/light";
import { darken } from "@material-ui/core";
import {
  Button,
  Dialog,
  DialogContent,
  Stack,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import { signIn } from "next-auth/react";
import DoNotDisturbOnTwoToneIcon from "@mui/icons-material/DoNotDisturbOnTwoTone";

interface IProps {
  open: boolean;
  onCancel?: () => void;
  text?: string;
  cancelButtonText: string;
}

function ConfirmationModal({ open, onCancel, text, cancelButtonText }: IProps) {
  const theme = useTheme();
  return (
    <Dialog
      fullWidth
      open={open}
      scroll="paper"
      onClose={onCancel}
      PaperProps={{ sx: { maxWidth: 500, maxHeight: 330 } }}
    >
      <DialogContent
        sx={{
          height: "520px",
          textAlign: "center",
          fontSize: 17,
          fontWeight: 500,
          padding: 5,
        }}
      >
        <DoNotDisturbOnTwoToneIcon
          sx={{ fontSize: "5rem", color: theme.palette.error.dark }}
        />
        <Typography variant="h4">{text}</Typography>
        <GGButton
          onClick={() =>
            signIn("facebook", {
              callbackUrl: "/",
            })
          }
          size="large"
          startIcon={
            <Image
              src="/assets/facebook_icon.svg.png"
              height={22}
              width={22}
              alt="Facebook Logo"
            />
          }
        >
          Sign in with Facebook
        </GGButton>
      </DialogContent>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        sx={{ marginBottom: 4 }}
      >
        <Button
          variant="contained"
          onClick={onCancel}
          sx={{ width: "50%", height: "2.5rem" }}
        >
          {cancelButtonText}
        </Button>
      </Stack>
    </Dialog>
  );
}

const GGButton = styled(Button)(({ theme }: CoDriverTheme) => ({
  backgroundColor: theme?.colors.primary.lighter,
  color: theme?.palette.common.black,
  marginTop: 25,
  fontWeight: 600,
  "&:hover": {
    backgroundColor: darken(theme?.palette.background.default as string, 0.2),
  },
}));

export default ConfirmationModal;
