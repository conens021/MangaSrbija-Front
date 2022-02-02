import { Box, TextField } from "@mui/material";
import { useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";

import { checIskUsernameAvailable } from "../../api/users";

let sarchDelay = null;

function UserNameAndEmail({ styles, checkIsEnterPressed }) {
  
  const [usernameLoading, setUsernameLoading] = useState(false);

  const [userName, setUsername] = useState("");

  const [usernameTouched, setUsernameTouched] = useState(false);

  const [usernameAvailable, setUserNameAvailable] = useState(false);

  const userNameValidMsg = "Korisničko ime mora da sadrži minimum 6 karaktera";

  const [email, setEmail] = useState();

  const [emailTouched, setEmailTouched] = useState(false);

  const [emailAvailable, setEmailAvailable] = useState(false);

  const [emailLoading, setEmailLoading] = useState(false);

  const emailNotValidMsg = "Nije validna email adresa";


  const usernameChangeHandler = async (event) => {
    setUsernameLoading(true);

    const usernameValue = event.target.value;

    if (sarchDelay) {
      clearTimeout(sarchDelay);
    }

    sarchDelay = setTimeout(async () => {
      try {
        await checIskUsernameAvailable(usernameValue);
        setUserNameAvailable(true);
        setUsernameTouched(true);
        setUsernameLoading(false);
      } catch (e) {
        if (e.request) {
          if (e.request.status === 409) {
            setUserNameAvailable(false);
          }
        }
        setUsernameLoading(false);
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

  const validateUsername = () => {
    if (userName.length >= 6) return true;
    return false;
  };

  const validateEmail = () => {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    return regex.test(email);
  };

  const userNameNotAvailable = !usernameAvailable && usernameTouched;
  const userNameNotValid = !validateUsername() && usernameTouched;

  const emailNotAvailable = !emailAvailable && emailTouched;
  const emailNotValid =  !validateEmail() && emailTouched;

  return (
    <Box className={styles.formRow}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <TextField
          color={!usernameTouched ? "" : "success"}
          id="name"
          label="Korisničko ime"
          InputProps={{ disableUnderline: true }}
          onChange={usernameChangeHandler}
          onKeyUp={keyUpHandler}
          required
          helperText={
            userNameNotAvailable
              ? "Korisnicko ime zauzeto"
              : userNameNotValid
              ? userNameValidMsg
              : ""
          }
          error={userNameNotAvailable || userNameNotValid}
        />
        {usernameLoading && <LinearProgress />}
      </Box>

      <Box sx={{ flex: "1", display: "flex", flexDirection: "column" }}>
      <TextField
          color={!emailTouched ? "" : "success"}
          id="name"
          label="Email adresa"
          InputProps={{ disableUnderline: true }}
          onChange={emailChangeHandler}
          onKeyUp={keyUpHandler}
          required
          helperText={
            emailNotAvailable
              ? "Korisnicko ime zauzeto"
              : emailNotValid
              ? emailNotValidMsg
              : ""
          }
          error={emailNotAvailable || emailNotValid}
        />
        {emailLoading && <LinearProgress />}
      </Box>
    </Box>
  );
}

export default UserNameAndEmail;
