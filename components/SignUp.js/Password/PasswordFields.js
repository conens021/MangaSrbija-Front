import { Box, TextField } from "@mui/material";
import { Fragment, useState } from "react";
import MainPassword from "./MainPassword";

function PasswordFields({ styles, checkIsEnterPressed }) {

  const [mainPassword, setMainPassword] = useState("");

  const [repeatPassowrd, setRepeatPassword] = useState("");

  const repeatPasswordChangeHandler = (event) => {
    const repeatPassowrdValue = event.target.value;
    console.log(`Repeat pass: ${repeatPassowrdValue}`);
    setRepeatPassword(repeatPassowrdValue)
  };
  const mainPasswordChangedHandler = (value) => {
    console.log(`Main pass: ${value}`);
  };

  const keyUpHandler = (event) => {
    checkIsEnterPressed(event);
  };

  return (
    <Fragment>
      <Box className={styles.formRow}>
        <MainPassword
          checkIsEnterPressed={keyUpHandler}
          passwordChanged={mainPasswordChangedHandler}
        />
      </Box>

      <Box className={styles.formRow}>
        <TextField
          style={{ flex: "1" }}
          id="outlined-password-input"
          label="Potvrdite lozinku"
          type="password"
          autoComplete="current-password"
          InputProps={{ disableUnderline: true }}
          onChange={repeatPasswordChangeHandler}
          onKeyUp={keyUpHandler}
          required
        />
      </Box>
    </Fragment>
  );
}

export default PasswordFields;
