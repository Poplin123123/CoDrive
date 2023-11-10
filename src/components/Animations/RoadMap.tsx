import { CoDriverTheme } from "@/theme/light";
import {
  Box,
  Card,
  Autocomplete,
  TextField,
  Divider,
  Typography,
  styled,
  Stack,
  useTheme,
} from "@mui/material";
import AirportShuttleTwoToneIcon from "@mui/icons-material/AirportShuttleTwoTone";

interface IProps {
  from: string;
  to: string;
}

const RoadMap = ({ from, to }: IProps) => {
  const theme = useTheme();

  return (
    <Stack direction="row" justifyContent="center" alignItems="center">
      <Stack direction="column">
        <Typography sx={{ fontWeight: 600, color: theme.palette.primary.dark }}>
          From:
        </Typography>
        <Typography
          variant="h1"
          sx={{
            mr: 2,
            fontSize: "24px",
            color: theme.palette.primary.light,
          }}
        >
          {from}
        </Typography>
      </Stack>
      <Stack direction="column" sx={{ width: "8em" }}>
        <AnimatedCar style={{ fontSize: "35px" }} />
        <Divider
          sx={{
            height: "5px", // Height of the divider
            width: "100%", // Width of the divider
            backgroundColor: "transparent", // Background color of the divider (transparent)
            borderTop: `5px dashed ${theme.palette.primary.dark}`, // Add a top border with a dotted style
          }}
        />
      </Stack>
      <Stack direction="column" sx={{ ml: 2 }}>
        <Typography sx={{ fontWeight: 600, color: theme.palette.primary.dark }}>
          To:
        </Typography>
        <Typography
          variant="h1"
          sx={{ fontSize: "24px", color: theme.palette.primary.dark }}
        >
          {to}
        </Typography>
      </Stack>
    </Stack>
  );
};

const AnimatedCar = styled(AirportShuttleTwoToneIcon)(
  ({ theme }: CoDriverTheme) => ({
    margin: "0 10px" /* Space between animations */,
    animation: "flicker 10s linear infinite" /* Define the animation */,
    [`@keyframes flicker`]: {
      "0%": {
        transform: "translateX(0)",
        color: theme?.colors.primary.light,
        // opacity: 0.8,
      },
      "50%": {
        transform: "translateX(100%)" /* Move to the right */,
        color: theme?.colors.primary.main,
        // opacity: 0.2 /* Reduce opacity */,
      },
      "100%": {
        transform: "translateX(200%)" /* Move to the right further */,
        color: theme?.colors.primary.dark,
        // opacity: 0.8 /* Restore opacity */,
      },
    },
    // animationDelay: "-3s",
  })
);

export default RoadMap;
