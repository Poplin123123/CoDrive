import { useState, useRef, ComponentType, LegacyRef } from "react";
import {
  Box,
  Card,
  Autocomplete,
  TextField,
  Button,
  Typography,
  lighten,
  useTheme,
  Stack,
  InputAdornment,
  Grid,
  styled,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import {
  SearchTwoTone,
  PersonOutlineTwoTone,
  RuleTwoTone,
} from "@mui/icons-material";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import clsx from "clsx";
import { Value, ReactQuillProps } from "react-quill";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { CoDriverTheme } from "@/theme/light";
import { useImmer } from "use-immer";
import { format } from "date-fns";
import PetsTwoToneIcon from "@mui/icons-material/PetsTwoTone";
import SmokeFreeTwoToneIcon from "@mui/icons-material/SmokeFreeTwoTone";
import NoFoodTwoToneIcon from "@mui/icons-material/NoFoodTwoTone";
import HailTwoToneIcon from "@mui/icons-material/HailTwoTone";
import MusicOffTwoToneIcon from "@mui/icons-material/MusicOffTwoTone";

interface QuillProps extends ReactQuillProps {
  forwardedRef: LegacyRef<ReactQuill> | undefined;
}

const QuillNoSSRWrapper: ComponentType<QuillProps> = dynamic(
  async () => {
    const { default: RQ } = await import("react-quill");

    // eslint-disable-next-line react/display-name
    return function ({ forwardedRef, ...props }) {
      return <RQ ref={forwardedRef} {...props} />;
    };
  },
  {
    ssr: false,
  }
);

interface Tags1 {
  id: number;
  label: string;
  icon?: JSX.Element;
}

const tags1 = [
  { id: 0, label: "Pets Are not Welcome", icon: <PetsTwoToneIcon /> },
  { id: 1, label: "No Smoking", icon: <SmokeFreeTwoToneIcon /> },
  { id: 2, label: "No Drinking or Eating", icon: <NoFoodTwoToneIcon /> },
  { id: 3, label: "No Unscheduled Stops", icon: <HailTwoToneIcon /> },
  { id: 3, label: "No Music", icon: <MusicOffTwoToneIcon /> },
];

const AdditionalInformation = () => {
  const theme = useTheme();
  const router = useRouter();
  const ref = useRef<ReactQuill>(null);

  const [showMap, setShowMap] = useState(false);
  const [text, setText] = useState("");
  const [sort, setSort] = useState<Tags1[]>([]);

  return (
    <Stack gap={5}>
      <Stack
        direction={{
          md: "row",
          xs: "column",
        }}
        sx={{ width: "100%" }}
        gap={4}
      >
        <Box sx={{ width: "100%" }}>
          <Typography
            variant="h2"
            color="primary.main"
            fontWeight={600}
            mb={0.5}
          >
            About Ride
          </Typography>
          <ReactQuillWrapper
            preserveWhitespace
            forwardedRef={ref}
            modules={{
              toolbar: [["bold", "italic", "underline"], [{ list: "bullet" }]],
            }}
            value={text}
            onChange={(e) => {
              setText(e);
            }}
          />
        </Box>
      </Stack>
      <Stack
        direction={{
          md: "row",
          xs: "column",
        }}
        sx={{ width: "100%" }}
        gap={4}
      >
        <Box sx={{ width: "100%" }}>
          <Typography
            variant="h2"
            color="primary.main"
            fontWeight={600}
            mb={0.5}
          >
            Restrictions
          </Typography>
          <Autocomplete
            size="medium"
            fullWidth
            options={tags1 || []}
            getOptionLabel={(option) => option.label || ""}
            multiple
            filterSelectedOptions
            disableClearable
            value={sort}
            onChange={(_, value) => {
              setSort(value);
            }}
            renderOption={(props, option) => (
              <li {...props}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  {option?.icon && option.icon}
                  <span style={{ marginLeft: "8px" }}>{option.label}</span>
                </div>
              </li>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Restrictions"
                fullWidth
                variant="outlined"
              />
            )}
          />
        </Box>
      </Stack>
    </Stack>
  );
};

const ReactQuillWrapper = styled(QuillNoSSRWrapper)(() => ({
  "& > .ql-container": {
    borderRadius: "0 0 4px 4px",
    wordBreak: "break-word",
    height: "10rem",
    width: "100%",
    paddingLeft: "0px",
    fontSize: "1em",
    padding: " 0.5rem 1rem",
  },
  "& > .ql-container .ql-editor": {
    paddingLeft: "0px",
  },
  "& > .ql-container .ql-editor::before": {
    left: "0",
    fontSize: "1rem",
  },
}));

export { AdditionalInformation };
