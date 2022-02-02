import { TextField } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import PasswordRequirements from "./PasswordRequirements";
import {getStrength,valid,isAllPresent } from './PasswordStrengthValues'

function MainPassword({ checkIsEnterPressed, passwordChanged,setPasswordStrenght }) {

  const [password, setPassword] = useState("");
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [isPasswordValid, setPasswordValid] = useState(false);


  useEffect(() => {
    if (passwordTouched) {
      validatePassword();
    }
  }, [password]);

  const passwordChangeHandler = (event) => {
    const passwordValue = event.target.value;
    setPassword(passwordValue);
    passwordChanged(passwordValue);
    setPasswordTouched(true);
    setPasswordStrenght(getStrength(passwordValue))
  };
  const keyUpHandler = (event) => {
    checkIsEnterPressed(event);
  };

  const validatePassword = () => {
    const isValid = valid(password) || isAllPresent(password) ;
    setPasswordValid(isValid);
    return isValid;
  };

  const passwordNotValid = !isPasswordValid && passwordTouched;

  return (
    <Fragment>
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
        color={isPasswordValid && "success"}
        error={passwordNotValid}
        helperText={
          passwordNotValid ? <PasswordRequirements password={password} /> : ""
        }
      />
    </Fragment>
  );
}

export default MainPassword;
