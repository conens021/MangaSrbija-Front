import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import PasswordRequirements from './PasswordRequirements'

function MainPassword({ checkIsEnterPressed, passwordChanged }) {
  const [password, setPassword] = useState("");
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [isPasswordValid, setPasswordValid] = useState(false);
  const [passwordStrength, setPasswordStrenght] = useState();

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
  };
  const keyUpHandler = (event) => {
    checkIsEnterPressed(event);
  };

  const validatePassword = () => {
    const isValid = eightCharsOneUpperOneLowerOneNumber();
    setPasswordValid(isValid);
    return isValid;
  };

  const eightCharsOneUpperOneLowerOneNumber = () => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return regex.test(password);
  };

  const passwordNotValid = !isPasswordValid && passwordTouched

  return (
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
      color = {isPasswordValid && 'success'}
      error = {passwordNotValid}
      helperText = {passwordNotValid ? <PasswordRequirements password={password}/>: ""}
    />
  );
}

export default MainPassword;
