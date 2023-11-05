import { ReactNode, SyntheticEvent, useState, useEffect } from "react";
import {
  Box,
  Tab,
  Breakpoint,
  styled,
  Tabs,
  Typography,
  Stack,
  lighten,
  useTheme,
} from "@mui/material";
import { CoDriverTheme } from "@/theme/light";

interface IProps {
  votepercentage: number;
}

const data = [
  {
    name: "5 stars",
    percentage: 84,
  },
  {
    name: "4 stars",
    percentage: 7,
  },
  {
    name: "3 stars",
    percentage: 5,
  },
  {
    name: "2 stars",
    percentage: 3,
  },
  {
    name: "1 star",
    percentage: 1,
  },
];

function ReviewGraph() {
  return (
    <Stack sx={{ mt: 2 }} flexDirection={"column"}>
      {data.map((item) => (
        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          gap={2}
          key={item.name}
        >
          <Typography fontSize={16} fontWeight={700}>
            {item.name}
          </Typography>
          <Box
            sx={{
              width: "20rem",
              height: "0.65rem",
              position: "relative",
              background: "#F6F8FB",
            }}
          >
            <AnimatedBox votepercentage={item.percentage} />
          </Box>
          <Typography fontSize={16} fontWeight={700}>
            {item.percentage}%
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
}

export default ReviewGraph;

const AnimatedBox = styled(Box)(
  ({ theme, votepercentage }: CoDriverTheme & IProps) => ({
    width: `${votepercentage}%`, // Set the initial width based on the percentage
    height: "100%",
    background: theme?.colors.primary.dark,
    transition: "width 1s ease-in-out", // Use transition for smooth width changes
    borderRadius: "15px",
  })
);
