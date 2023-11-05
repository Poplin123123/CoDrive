import { SearchTwoTone, PersonOutlineTwoTone } from "@mui/icons-material";
import {
  Card,
  Grid,
  InputAdornment,
  TextField,
  Autocomplete,
} from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import DatePickerInput from "./DatePickerInput";
import { Updater } from "use-immer";

const CITIES_TEMP = [
  "Tbilisi",
  "Batumi",
  "Kutaisi",
  "Rustavi",
  "Zugdidi",
  "Rustavi",
  "Mestia",
  "Telavi",
  "Bakuriani",
  "Gudauri",
  "Gori",
  "Poti",
  "Kareli",
  "Kvareli",
];

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

interface IProps {
  filters: {
    leavingFrom: string;
    goingTo: string;
    guestsQuantity: string;
    date: string;
  };
  changeFilters: Updater<{
    leavingFrom: string;
    goingTo: string;
    guestsQuantity: string;
    date: string;
  }>;
}

function Search({ filters, changeFilters }: IProps) {
  return (
    <>
      <Grid item md={3} xs={12}>
        <Autocomplete
          size="medium"
          options={CITIES_TEMP || []}
          getOptionLabel={(option) => option || ""}
          filterSelectedOptions
          disableClearable
          value={filters.leavingFrom}
          onChange={(_, value) => {
            changeFilters((draft) => {
              draft.leavingFrom = value;
            });
          }}
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
      <Grid item md={3} xs={12}>
        <Autocomplete
          size="medium"
          options={CITIES_TEMP || []}
          getOptionLabel={(option) => option || ""}
          filterSelectedOptions
          disableClearable
          value={filters.goingTo}
          onChange={(_, value) => {
            changeFilters((draft) => {
              draft.goingTo = value;
            });
          }}
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
      <Grid item md={1} xs={12}>
        <TextField
          value={filters.guestsQuantity}
          onChange={(e) => {
            changeFilters((draft) => {
              draft.guestsQuantity = e.target.value;
            });
          }}
          variant="outlined"
          inputProps={{ maxLength: 3 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonOutlineTwoTone color="primary" />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      {/* format(e || new Date(), "yyyy-MM-dd") */}
      <Grid item md={2} xs={12}>
        <DatePicker
          showIcon
          id="datepicker-id"
          name="date-demo"
          onChange={(e) => {
            changeFilters((draft) => {
              draft.date = format(e || new Date(), "MM/dd/yyyy");
            });
          }}
          selected={new Date(filters.date)}
          value={filters.date}
          placeholderText="Date"
          customInput={<DatePickerInput />}
        />
      </Grid>
    </>
  );
}

export default Search;
