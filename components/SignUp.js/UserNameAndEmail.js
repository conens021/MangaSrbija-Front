import { Box, TextField } from "@mui/material";
import { useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";

import { checIskUsernameAvailable } from "../../api/users";

let sarchDelay = null;

function UserNameAndEmail({ styles, checkIsEnterPressed }) {
  const [loading, setLoading] = useState(false);

  const [userName, setUsername] = useState();

  const [usernameTouched, setUsernameTouched] = useState(false);

  const [usernameAvailable, setUserNameAvailable] = useState(false);

  const [email, setEmail] = useState();

  const [emailTouched, setEmailTouched] = useState(false);

  const [emailAvailable, setEmailAvailable] = useState(false);

  const [emailLoading, setEmailLoading] = useState(false);

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

  const emailChangeHandler = async (event) => {
    setEmailLoading(true);

    const emailValue = event.target.value;

    if (sarchDelay) {
      clearTimeout(sarchDelay);
    }

    sarchDelay = setTimeout(async () => {
      try {
        await checIskUsernameAvailable(emailValue);
        setEmailAvailable(true);
        setEmailTouched(true);
        setEmailLoading(false);
      } catch (e) {
        if (e.request) {
          if (e.request.status === 409) {
            setEmailAvailable(false);
          }
        }
        setEmailLoading(false);
      }
    }, 700);
    setEmail(emailValue);
  };

  const keyUpHandler = (event) => {
    checkIsEnterPressed(event);
  };

  const userNameNotValid = !usernameAvailable && usernameTouched;
  const userNameValid = usernameAvailable && usernameTouched;

  const emailNotValid = !emailAvailable && emailTouched;
  const emailValid = emailAvailable && emailTouched;

  return (
    <Box className={styles.formRow}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
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

      <Box sx={{ flex: "1", display: "flex", flexDirection: "column" }}>
        <TextField
          color={emailValid && "success"}
          sx={{ flex: "1" }}
          id="email"
          label={emailValid ? "Email adresa dostupna" : "Email adresa"}
          InputProps={{ disableUnderline: true }}
          onChange={emailChangeHandler}
          onKeyUp={keyUpHandler}
          required
          helperText={emailNotValid ? "Email adresa vec postoji" : ""}
          error={emailNotValid}
        />
        {emailLoading && <LinearProgress />}
      </Box>
    </Box>
  );
}

export default UserNameAndEmail;
