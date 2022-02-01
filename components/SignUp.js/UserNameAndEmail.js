import { Box, TextField } from "@mui/material";
import { useState } from "react";

function UserNameAndEmail({styles,checkIsEnterPressed}) {

  const [userName, setUsername] = useState();

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const keyUpHandler = (event) => {
    checkIsEnterPressed(event)
  }

    return ( 
        <Box className={styles.formRow}>
        <TextField
          color=""
          id="name"
          label="Korisničko ime"
          InputProps={{ disableUnderline: true }}
          onChange={usernameChangeHandler}
          onKeyUp={keyUpHandler}
          required
        />
        <TextField
          sx={{ flex: "1" }}
          color=""
          id="email"
          label="Imejl adresa"
          InputProps={{ disableUnderline: true }}
          onChange={usernameChangeHandler}
          onKeyUp={keyUpHandler}
          required
        />
      </Box>
     );
}

export default UserNameAndEmail;