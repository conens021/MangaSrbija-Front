import MobileDatePicker from "@mui/lab/MobileDatePicker";
import { TextField } from "@mui/material";
import { useState } from "react";

function DateOfBorn() {
  const [date, setDate] = useState(new Date());

  return (
    <MobileDatePicker
      label="Date mobile"
      inputFormat="MM/dd/yyyy"
      renderInput={(params) => <TextField {...params} value={date} />}
    />
  );
}

export default DateOfBorn;
