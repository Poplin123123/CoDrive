import { Button, Dialog, DialogContent, Stack } from "@mui/material";

interface IProps {
  open: boolean;
  onCancel?: () => void;
  onSubmit?: () => void;
  text?: string;
  buttonNames: {
    cancelButton: string;
    submitButton: string;
  };
}

function WarningModal({ open, onCancel, onSubmit, text, buttonNames }: IProps) {
  return (
    <Dialog
      fullWidth
      open={open}
      scroll="paper"
      onClose={onCancel}
      PaperProps={{ sx: { maxWidth: 700 } }}
    >
      <DialogContent
        sx={{
          height: "auto",
          textAlign: "center",
          fontSize: 17,
          fontWeight: 500,
          padding: 5,
        }}
      >
        {text}
      </DialogContent>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        sx={{ marginBottom: 4 }}
      >
        <Button variant="contained" onClick={onSubmit} sx={{ color: "white" }}>
          {buttonNames.submitButton}
        </Button>

        {buttonNames.cancelButton && (
          <Button onClick={onCancel}>{buttonNames.cancelButton}</Button>
        )}
      </Stack>
    </Dialog>
  );
}

export default WarningModal;
