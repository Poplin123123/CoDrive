import { useState } from "react";
import {
  Button,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  TextField,
  Typography,
  Popover,
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const useStyles = makeStyles(() => ({
  closeIcon: {
    marginLeft: "auto",
    marginBottom: "20px",
    display: "flex",
    cursor: "pointer",
    width: "17px !important",
  },
  popupIndicator: {
    marginRight: "5px",
  },
  // calendar: {
  //   "& > div > div > div > button": {
  //     background: theme.palette.background.paper,
  //     color: theme.palette.text.primary,
  //   },
  // },
}));

const CalendarUI = () => {
  const classes = useStyles();
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          format="MM/dd/yyyy"
          // DialogProps={{ className: classes.calendar }}
          label="Start Date"
          inputVariant="outlined"
          value={date}
          style={{ margin: 0 }}
          onChange={(val) => {
            setDate(val || new Date());
          }}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
      </MuiPickersUtilsProvider>
    </div>
  );
};

export default CalendarUI;
