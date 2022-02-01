import { Box, TextField } from "@mui/material";
import { Fragment, useState } from "react";

function PasswordFields({ styles, checkIsEnterPressed }) {
  
  const [password, setPassword] = useState();

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const keyUpHandler = (event) => {
    checkIsEnterPressed(event);
  };

  return (
    <Fragment>
      <Box className={styles.formRow}>
        <TextField
          style={{ flex: "1" }}
          id="outlined-password-input"
          label="Lozinka"
          type="password"
          autoComplete="current-password"
          InputProps={{ disableUnderline: true }}
          onChange={passwordChangeHandler}
          onKeyUp={keyUpHandler}
          required
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
          onChange={passwordChangeHandler}
          onKeyUp={keyUpHandler}
          required
        />
      </Box>
    </Fragment>
  );
}

export default PasswordFields;
