import { SearchTwoTone, PersonOutlineTwoTone } from "@mui/icons-material";
import { Grid, InputAdornment, TextField, Autocomplete } from "@mui/material";
import { Updater } from "use-immer";
import Calendar from "./Calendar";

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
        <Calendar filters={filters} changeFilters={changeFilters} />
      </Grid>
    </>
  );
}

export default Search;
