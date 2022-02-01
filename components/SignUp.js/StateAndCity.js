import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { Fragment } from "react";

function StateAndCity({styles,checkIsEnterPressed}) {

    const keyUpHandler = (event) => {
        checkIsEnterPressed(event);
      };
    

  return (
    <Fragment>
      <FormControl sx={{ flex: "1" }}>
        <InputLabel id="drzava-label">Država</InputLabel>
        <Select labelId="drzava-label" id="drzava-select" label="Drzava">
          <MenuItem value={1}>Srbija</MenuItem>
          <MenuItem value={2}>Bosna i Hercegovina</MenuItem>
          <MenuItem value={3}>Slovenija</MenuItem>
          <MenuItem value={4}>Hrvatska</MenuItem>
        </Select>
      </FormControl>

      <TextField
        sx={{ flex: "1" }}
        color=""
        id="city"
        label="Grad"
        InputProps={{ disableUnderline: true }}
        onKeyUp={keyUpHandler}
        required
      />
    </Fragment>
  );
}

export default StateAndCity;
