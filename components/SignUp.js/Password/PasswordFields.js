import { Box, TextField } from "@mui/material";
import { Fragment, useState } from "react";
import LinearProgressWithLabel from "../../UI/ProgressWithLabel/LinearProgressWithLabel";
import MainPassword from "./MainPassword";
import { getStrengthColor, getStrengthText } from "./PasswordStrengthValues";

function PasswordFields({ styles, checkIsEnterPressed }) {
  const [mainPassword, setMainPassword] = useState("");
  const [mainPasswordValid, setMainPasswordValid] = useState(false);

  const [passwordStrength, setPasswordStrenght] = useState(0);

  const [repeatPassowrd, setRepeatPassword] = useState("");

  const strengthColor = getStrengthColor(passwordStrength);

  const strengthText = getStrengthText(passwordStrength);

  const repeatPasswordChangeHandler = (event) => {
    const repeatPassowrdValue = event.target.value;
    console.log(`Repeat pass: ${repeatPassowrdValue}`);
    setRepeatPassword(repeatPassowrdValue);
  };
  const mainPasswordChangedHandler = (value) => {
    console.log(`Main pass: ${value}`);
  };

  const keyUpHandler = (event) => {
    checkIsEnterPressed(event);
  };

  const passwordStrengthHandler = (value) => {
    setPasswordStrenght(value);
    console.log(value);
  };

  const passwordIsValidHandler = (isValid) => {
    setMainPasswordValid(isValid);
  };

  return (
    <Fragment>
      <Box className={styles.formRow}>
        <MainPassword
          passwordIsValidHandler={passwordIsValidHandler}
          setPasswordStrenght={passwordStrengthHandler}
          checkIsEnterPressed={keyUpHandler}
          passwordChanged={mainPasswordChangedHandler}
        />
      </Box>
      {mainPasswordValid &&
          (<Box className={styles.formRow}>
          <LinearProgressWithLabel
            progress={passwordStrength}
            color={strengthColor}
            text={strengthText}
          />
        </Box>)
      }
  
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
