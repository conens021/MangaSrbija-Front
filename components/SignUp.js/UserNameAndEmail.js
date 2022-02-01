import { Box, TextField } from "@mui/material";
import { useState } from "react";
import LinearProgress from '@mui/material/LinearProgress';

import { checIskUsernameAvailable } from "../../api/users";

let sarchDelay = null;

function UserNameAndEmail({ styles, checkIsEnterPressed }) {
  const [loading, setLoading] = useState(false);

  const [userName, setUsername] = useState();

  const [usernameTouched, setUsernameTouched] = useState(false);

  const [usernameAvailable, setUserNameAvailable] = useState(false);

  const usernameChangeHandler = async (event) => {
    setLoading(true);

    const usernameValue = event.target.value;

    if (sarchDelay) {
      clearTimeout(sarchDelay);
    }

    sarchDelay = setTimeout(async () => {
      try {
        await checIskUsernameAvailable(usernameValue);
        setUserNameAvailable(true);
        setUsernameTouched(true);
        setLoading(false);
      } catch (e) {
        if (e.request) {
          if (e.request.status === 409) {
            setUserNameAvailable(false);
          }
        }
        setLoading(false);
      }
    }, 700);
    setUsername(usernameValue);
  };

  const keyUpHandler = (event) => {
    checkIsEnterPressed(event);
  };

  const userNameNotValid = !usernameAvailable && usernameTouched;
  const userNameValid = usernameAvailable && usernameTouched;

  return (
    <Box className={styles.formRow}>
      <Box sx={{display:'flex',flexDirection:'column'}}>
        <TextField
          color={userNameValid && "success"}
          id="name"
          label={userNameValid ? "Korisničko ime dostupno" : "Korisničko ime"}
          InputProps={{ disableUnderline: true }}
          onChange={usernameChangeHandler}
          onKeyUp={keyUpHandler}
          required
          helperText={userNameNotValid ? "Korisnicko ime zauzeto" : ""}
          error={userNameNotValid}
        />
        {loading && <LinearProgress />}
      </Box>

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
