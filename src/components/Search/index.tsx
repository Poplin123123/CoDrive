import { SearchTwoTone, PersonOutlineTwoTone } from "@mui/icons-material";
import {
  Card,
  Grid,
  InputAdornment,
  TextField,
  Autocomplete,
  styled,
  Box,
} from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import DatePickerInput from "./DatePickerInput";
import { Updater } from "use-immer";
import { CoDriverTheme } from "@/theme/light";

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
      <Grid item md={2} xs={12}>
        <CalendarWrapper>
          <DatePicker
            showIcon={false}
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
            minDate={new Date()}
          />
        </CalendarWrapper>
      </Grid>
    </>
  );
}

const CalendarWrapper = styled(Box)(
  ({ theme }: CoDriverTheme) => `
    .react-datepicker-popper {
      color: ${theme?.colors.primary.dark} !important;
      .react-datepicker__header {
        background: #F6F8FB;
      }
      .react-datepicker__day-name {
        font-size: 15px;
        color: ${theme?.colors.primary.dark} !important;
        font-weight: 500;
      }
      .react-datepicker{
        // font-size: 20px !important;
      }
      .react-datepicker__current-month{
        font-size: 20px !important;
        color: ${theme?.colors.primary.dark}
      }
      .react-datepicker__navigation {
        height: 45px !important;
        width: 30px !important;
      }
      .react-datepicker__navigation-icon {
        background: ${theme?.colors.primary.dark} !important;
          // height: 5px !important;
          // width: 5px !important;
      }
      .react-datepicker__navigation-icon::before {
        border-color: ${theme?.colors.primary.dark} !important;
      }
      .react-datepicker__week {
        font-size: 15px;
      }
      .react-datepicker__day-name, .react-datepicker__day, .react-datepicker__time-name {
        width: 40px !important;
        height: 40px;
        text-align: center;
        padding-top: 6.75px;
      }
      .react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range, .react-datepicker__month-text--selected, .react-datepicker__month-text--in-selecting-range, .react-datepicker__month-text--in-range, .react-datepicker__quarter-text--selected, .react-datepicker__quarter-text--in-selecting-range, .react-datepicker__quarter-text--in-range, .react-datepicker__year-text--selected, .react-datepicker__year-text--in-selecting-range, .react-datepicker__year-text--in-range {
        border-radius: 99px;
        background: ${theme?.colors.primary.dark} !important;
      }
      .react-datepicker__day--today {
        border: 1px solid ${theme?.colors.primary.dark};
        border-radius: 99px;
      }
    }
`
);

export default Search;
