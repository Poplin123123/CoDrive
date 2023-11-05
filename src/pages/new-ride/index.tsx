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
} from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import {
  SearchTwoTone,
  PersonOutlineTwoTone,
  RuleTwoTone,
} from "@mui/icons-material";
import { useRouter } from "next/router";
import Page from "@/components/Page";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DatePickerInput from "@/components/Search/DatePickerInput";
import clsx from "clsx";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { CoDriverTheme } from "@/theme/light";

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

const NewRide = () => {
  const theme = useTheme();
  const router = useRouter();
  const classes = useStyles();

  return (
    <Page title="Add new ride">
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
          Add new ride
        </Typography>
      </Card>
      <Card sx={{ p: 3, mt: 5 }}>
        <Grid container xs={12} gap={2}>
          <Grid container item xs={12} gap={2}>
            <Grid item md={5.85} xs={12}>
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
                      startAdornment: <SearchTwoTone />,
                    }}
                    placeholder="Leaving From..."
                    fullWidth
                    variant="outlined"
                  />
                )}
              />
            </Grid>
            <Grid item md={5.85} xs={12}>
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
                      startAdornment: <SearchTwoTone />,
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
              <DatePicker
                showIcon
                id="datepicker-id"
                name="date-demo"
                // onChange={(e) => {
                //   changeFilters((draft) => {
                //     draft.date = format(e || new Date(), "MM/dd/yyyy");
                //   });
                // }}
                // selected={new Date(filters.date)}
                // value={filters.date}
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
                <ReactQuill
                  preserveWhitespace
                  className={clsx(classes.editor)}
                  placeholder="Customize your Welcome Message & provide instructions to your guests"
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
          </Grid>
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            onClick={() => {}}
            sx={{ width: "10rem", height: "2.5rem", mt: 25 }}
          >
            Create Ride
          </Button>
        </Box>
      </Card>
    </Page>
  );
};

export default NewRide;
