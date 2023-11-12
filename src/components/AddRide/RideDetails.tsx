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
import Page from "@/components/Page";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DatePickerInput from "@/components/Search/DatePickerInput";
import clsx from "clsx";
import { Value, ReactQuillProps } from "react-quill";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { CoDriverTheme } from "@/theme/light";
import { useImmer } from "use-immer";
import { format } from "date-fns";
import PinDropTwoToneIcon from "@mui/icons-material/PinDropTwoTone";
import MapTwoToneIcon from "@mui/icons-material/MapTwoTone";
import Calendar from "../Search/Calendar";

const CITIES_TEMP = [
  "Batumi",
  "Tbilisi",
  "Rustavi",
  "Kutaisi",
  "Gori",
  "Poti",
  "Gagra",
  "Telavi",
  "Kareli",
  "Terjola",
];

const RideDetails = () => {
  const theme = useTheme();
  const router = useRouter();

  const [showMap, setShowMap] = useState(false);

  const [filters, setFilters] = useImmer({
    leavingFrom: "",
    goingTo: "",
    guestsQuantity: "",
    date: format(new Date(), "dd/MM/yyyy"),
  });

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
        <Box
          width={{
            md: "50%",
            xs: "100%",
          }}
        >
          <Typography
            variant="h2"
            color="primary.main"
            fontWeight={600}
            mb={0.5}
          >
            Going From
          </Typography>
          <Autocomplete
            size="medium"
            options={CITIES_TEMP || []}
            getOptionLabel={(option) => option || ""}
            filterSelectedOptions
            disableClearable
            renderInput={(params) => (
              <TextField
                {...params}
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <PinDropTwoToneIcon
                      sx={{ cursor: "pointer" }}
                      color="primary"
                      onClick={() => setShowMap(true)}
                    />
                  ),
                }}
                placeholder="Leaving From..."
                fullWidth
                variant="outlined"
              />
            )}
          />
        </Box>
        <Box
          width={{
            md: "50%",
            xs: "100%",
          }}
        >
          <Typography
            variant="h2"
            color="primary.main"
            fontWeight={600}
            mb={0.5}
          >
            Going To
          </Typography>
          <Autocomplete
            size="medium"
            options={CITIES_TEMP || []}
            getOptionLabel={(option) => option || ""}
            filterSelectedOptions
            disableClearable
            renderInput={(params) => (
              <TextField
                {...params}
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <PinDropTwoToneIcon
                      sx={{ cursor: "pointer" }}
                      color="primary"
                      onClick={() => setShowMap(true)}
                    />
                  ),
                }}
                placeholder="Going To..."
                fullWidth
                variant="outlined"
              />
            )}
          />
        </Box>
      </Stack>
      <Stack>
        <Typography variant="h2" color="primary.main" fontWeight={600} mb={0.5}>
          Date
        </Typography>
        <Calendar filters={filters} changeFilters={setFilters} />
      </Stack>
      <Stack
        direction={{
          md: "row",
          xs: "column",
        }}
        gap={4}
      >
        <Stack
          width={{
            md: "50%",
            xs: "100%",
          }}
        >
          <Typography
            variant="h2"
            color="primary.main"
            fontWeight={600}
            mb={0.5}
          >
            Available Seats
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            label="Seats"
            inputProps={{ maxLength: 3 }}
            helperText
          />
        </Stack>
        <Stack
          width={{
            md: "50%",
            xs: "100%",
          }}
        >
          <Typography
            variant="h2"
            color="primary.main"
            fontWeight={600}
            mb={0.5}
          >
            Price Per Person
          </Typography>
          <TextField
            variant="outlined"
            label="Price"
            fullWidth
            inputProps={{ maxLength: 3 }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export { RideDetails };
