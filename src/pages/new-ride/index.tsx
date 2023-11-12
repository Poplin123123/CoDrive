import { useState, useRef, ComponentType, LegacyRef } from "react";
import {
  Box,
  Card,
  Button,
  Typography,
  lighten,
  useTheme,
  Stack,
  styled,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
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
import { RideDetails, AdditionalInformation } from "@/components/AddRide";

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

const useStyles = makeStyles((theme: CoDriverTheme) => ({
  quillBackground: {
    color: () => "#ff3030",
  },
  editor: () => ({
    "& > .ql-container": {
      borderRadius: "0 0 4px 4px",
      position: "absolute",
      height: "10rem",
      width: "100%",
    },
    "& > .ql-toolbar": {
      justifyContent: "flex-start",
      borderBottom: "none",
      borderRadius: "4px 4px 0 0",
    },
    "& > .quill": {
      height: "100%",
    },
  }),
}));

const steps = ["Ride Details", "Additional Information", "Preview"];

const NewRide = () => {
  const theme = useTheme();
  const router = useRouter();
  const classes = useStyles();
  const ref = useRef<ReactQuill>(null);

  const [showMap, setShowMap] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const [filters, setFilters] = useImmer({
    leavingFrom: "",
    goingTo: "",
    guestsQuantity: "",
    date: format(new Date(), "dd/MM/yyyy"),
    pricePerPerson: 0,
    demands: [],
    aboutTheRide: "",
  });

  return (
    <Page title="Add New Ride">
      <Card sx={{ p: 3, background: lighten(theme.palette.primary.main, 0.1) }}>
        <Stack
          flexDirection={"row"}
          gap={1}
          alignItems={"center"}
          onClick={() => router.back()}
          sx={{ cursor: "pointer" }}
        >
          <ArrowBackIcon sx={{ color: "white" }} />
          <Typography variant="h1" fontSize={20} sx={{ color: "white" }}>
            Products
          </Typography>
        </Stack>
        <Typography variant="h2" fontSize={25} mt={1} sx={{ color: "white" }}>
          Add New Ride
        </Typography>
      </Card>

      <Card sx={{ p: 3, mt: 5 }}>
        <Stepper
          activeStep={activeStep}
          alternativeLabel
          sx={{ background: "transparent" }}
        >
          {steps.map((label, index) => {
            const stepProps: { completed?: boolean } = {};
            const labelProps: {
              optional?: React.ReactNode;
            } = {};
            // if (isStepOptional(index)) {
            //   labelProps.optional = (
            //     <Typography variant="caption">Optional</Typography>
            //   );
            // }
            // if (isStepSkipped(index)) {
            //   stepProps.completed = false;
            // }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <>
          {activeStep === 0 && (
            <Box sx={{ ml: 5 }}>
              <RideDetails />
            </Box>
          )}
          {activeStep === 1 && (
            <Box sx={{ ml: 5 }}>
              <AdditionalInformation />
            </Box>
          )}
          {/* <Grid container item xs={12} gap={2}>
            <Grid item md={5.85} xs={12}>
              <Typography variant="h2" color="primary.main" fontWeight={600}>
                Going From
              </Typography>
              <Autocomplete
                size="medium"
                options={CITIES_TEMP || []}
                getOptionLabel={(option) => option || ""}
                filterSelectedOptions
                disableClearable
                // value={filters.leavingFrom}
                // onChange={(_, value) => {
                //   changeFilters((draft) => {
                //     draft.leavingFrom = value;
                //   });
                // }}
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
            </Grid>
            <Grid item md={5.85} xs={12}>
              <Typography variant="h2" color="primary.main" fontWeight={600}>
                Going To
              </Typography>
              <Autocomplete
                size="medium"
                options={CITIES_TEMP || []}
                getOptionLabel={(option) => option || ""}
                filterSelectedOptions
                disableClearable
                // value={filters.leavingFrom}
                // onChange={(_, value) => {
                //   changeFilters((draft) => {
                //     draft.leavingFrom = value;
                //   });
                // }}
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
            </Grid>
          </Grid>
          <Grid container item xs={12} gap={2}>
            <Grid item md={5.8} xs={12}>
              <Typography>Date</Typography>
              <DatePicker
                showIcon={false}
                id="datepicker-id"
                onChange={(e) => {
                  setFilters((draft) => {
                    draft.date = format(e || new Date(), "dd/MM/yyyy");
                  });
                }}
                selected={new Date(filters.date)}
                value={filters.date}
                placeholderText="Date"
                customInput={<DatePickerInput />}
              />
            </Grid>
            <Grid container item md={6} xs={12} gap={2}>
              <Grid item md={5.8} xs={12}>
                <TextField
                  // value={filters.guestsQuantity}
                  // onChange={(e) => {
                  //   changeFilters((draft) => {
                  //     draft.guestsQuantity = e.target.value;
                  //   });
                  // }}
                  fullWidth
                  variant="outlined"
                  label="Available seats"
                  inputProps={{ maxLength: 3 }}
                  // InputProps={{
                  //   startAdornment: (
                  //     <InputAdornment position="start">
                  //       <PersonOutlineTwoTone color="primary" />
                  //     </InputAdornment>
                  //   ),
                  // }}
                />
              </Grid>
              <Grid item md={5.8} xs={12}>
                <TextField
                  // value={filters.guestsQuantity}
                  // onChange={(e) => {
                  //   changeFilters((draft) => {
                  //     draft.guestsQuantity = e.target.value;
                  //   });
                  // }}
                  variant="outlined"
                  label="Price per person"
                  fullWidth
                  inputProps={{ maxLength: 3 }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Autocomplete
              size="medium"
              multiple
              options={CITIES_TEMP || []}
              getOptionLabel={(option) => option || ""}
              filterSelectedOptions
              disableClearable
              // value={filters.leavingFrom}
              // onChange={(_, value) => {
              //   changeFilters((draft) => {
              //     draft.leavingFrom = value;
              //   });
              // }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  InputProps={{
                    ...params.InputProps,
                    startAdornment: <RuleTwoTone />,
                  }}
                  placeholder="Demands"
                  fullWidth
                  variant="outlined"
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <div className="flex md:flex-row flex-col w-full">
              <div className="relative w-full">
                <ReactQuillWrapper
                  preserveWhitespace
                  forwardedRef={ref}
                  // className={clsx(classes.editor)}
                  modules={{
                    toolbar: [
                      ["bold", "italic", "underline"],
                      [{ list: "bullet" }],
                    ],
                  }}
                  value={"sdadsa"}
                  // onChange={e => {
                  // 	setForm(draft => {
                  // 		draft.values.branding.description = e;
                  // 	});
                  // }}
                />
                <h6
                  style={{
                    position: "absolute",
                    top: "-6px",
                    fontSize: "10px",
                    left: "11px",
                    padding: "0px 7px",
                  }}
                >
                  Ride description
                </h6>
              </div>
            </div>
          </Grid> */}
        </>
        <Box
          sx={{
            display: "flex",
            justifyContent: !!activeStep ? "space-between" : "flex-end",
          }}
        >
          {!!activeStep && (
            <Button
              variant="contained"
              onClick={() => setActiveStep((prev) => prev - 1)}
              sx={{ height: "2.5rem", mt: 25 }}
            >
              Back
            </Button>
          )}
          {!!steps?.[activeStep + 1] ? (
            <Button
              variant="contained"
              onClick={() => setActiveStep((prev) => prev + 1)}
              sx={{ width: "10rem", height: "2.5rem", mt: 25 }}
            >
              Next
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={() => setActiveStep((prev) => prev + 1)}
              sx={{ width: "10rem", height: "2.5rem", mt: 25 }}
            >
              Create
            </Button>
          )}
        </Box>
      </Card>
    </Page>
  );
};

const ReactQuillWrapper = styled(QuillNoSSRWrapper)(() => ({
  "& > .quill": {
    height: "100%",
    width: "100%",
  },
  "& > .ql-container": {
    borderRadius: "0 0 4px 4px",
    minHeight: "8rem",
    width: "100%",
    paddingLeft: "0px",
    fontSize: "1em",
    border: "none !important",
  },
  "& > .ql-container .ql-editor": {
    paddingLeft: "0px",
  },
  "& > .ql-container .ql-editor::before": {
    left: "0",
    fontSize: "1rem",
  },
}));

export default NewRide;
