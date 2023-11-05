import { Box, Typography, Card, Chip } from "@mui/material";
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
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      {price > 10 && (
        <Chip
          label={priceTags.expansive}
          variant="outlined"
          sx={{ background: "#ff3838", color: "white", border: "none" }}
        />
      )}
      {price === 10 && (
        <Chip
          label={priceTags.normal}
          variant="outlined"
          sx={{ background: "#17c0eb", color: "white", border: "none" }}
        />
      )}
      {price < 10 && (
        <Chip
          label={priceTags.cheap}
          variant="outlined"
          sx={{ background: "#3ae374", color: "white", border: "none" }}
        />
      )}
    </Box>
  );
}
