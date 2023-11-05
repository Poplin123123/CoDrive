import { Button } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

interface IProps {
  //   value: string;
}

const DatePickerInput = (props: any) => {
  return (
    <Button
      variant="outlined"
      placeholder={props.placeholder}
      onClick={props.onClick}
      size="large"
      ref={props.ref}
      startIcon={<CalendarTodayIcon />}
      sx={{ height: "100%" }}
    >
      {props.value}
    </Button>
  );
};

export default DatePickerInput;
