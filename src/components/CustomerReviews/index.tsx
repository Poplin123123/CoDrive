import { ReactNode, SyntheticEvent } from "react";
import {
  Box,
  Tab,
  Breakpoint,
  styled,
  Tabs,
  Typography,
  Stack,
  Divider,
  darken,
  useTheme,
} from "@mui/material";
import { CoDriverTheme } from "@/theme/light";
import ReviewGraph from "./ReviewGraph";
import StarRatings from "react-star-ratings";

function CustomerReviews() {
  const theme = useTheme();

  return (
    <Box>
      <Stack flexDirection={"row"} gap={1}>
        <Typography variant="h1">Customer Reviews</Typography>
        <Typography variant="h1" sx={{ color: theme.palette.primary.light }}>
          (75)
        </Typography>
      </Stack>
      <Stack flexDirection={"row"}>
        <Box sx={{ my: 2, width: "50%" }}>
          <ReviewGraph />
        </Box>

        <Box display={"flex"}>
          <Divider orientation="vertical" flexItem />
          <Box ml={4}>
            <Stack flexDirection={"row"} alignItems={"flex-end"}>
              <Typography variant="h1">4.5</Typography>
              <Typography variant="h2" sx={{ color: darken("#F6F8FB", 0.3) }}>
                /5
              </Typography>
            </Stack>
            <StarRatings
              rating={4.5}
              starRatedColor={theme.palette.primary.dark}
              numberOfStars={5}
              name="rating"
              starDimension="30px"
            />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}

export default CustomerReviews;
