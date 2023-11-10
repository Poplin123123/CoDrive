import { Box, lighten, Card, Chip, useTheme } from "@mui/material";
import { users } from "@/mock/products";

interface IProps {
  price: number;
}

const priceTags = {
  cheap: "დაბალი ფასი",
  normal: "საშუალო ფასი",
  expansive: "ძვირი",
};

export default function PriceBag({ price }: IProps) {
  const theme = useTheme();

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      {price > 10 && (
        <Chip
          label={priceTags.expansive}
          variant="outlined"
          sx={{
            background: theme.palette.error.main,
            color: "white",
            border: "none",
          }}
        />
      )}
      {price === 10 && (
        <Chip
          label={priceTags.normal}
          variant="outlined"
          sx={{
            background: lighten(theme.palette.primary.main, 0.2),
            color: "white",
            border: "none",
          }}
        />
      )}
      {price < 10 && (
        <Chip
          label={priceTags.cheap}
          variant="outlined"
          sx={{
            background: theme.palette.success.dark,
            color: "white",
            border: "none",
          }}
        />
      )}
    </Box>
  );
}
