import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "universal-cookie";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import UserNameAndEmail from "./UserNameAndEmail";
import PasswordFields from "./Password/PasswordFields";
import DateOfBorn from "./DateOfBorn";
import StateAndCity from "./StateAndCity";

function SignUpModal({ styles }) {
  const cookies = new Cookies();

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const signUpModalVisible = useSelector((state) => state.showSignUpModal);

  const dispatch = useDispatch();

  const submitSignUp = async () => {
    try {
      setLoading(true);
      setError(false);
      setLoading(false);
    } catch (e) {
      if (e.request.status === 401) {
        setError(true);
        setErrorMessage("Pogrešno korisničko ime ili lozinka.");
        setLoading(false);
      }
    }
  };

  const keyUpHandler = (event) => {
    if (event.key === "Enter") {
      submitSignUp();
    }
  };

  const closeSignUpModal = () => {
    setError(false);
    dispatch({ type: "CLOSE_SIGNUP_MODAL" });
  };

  return (
    <Modal
      open={signUpModalVisible}
      onClose={closeSignUpModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Box bgcolor="background.default" className={styles.signUpModal}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Kreiraj nalog
          </Typography>
          <UserNameAndEmail
            checkIsEnterPressed={keyUpHandler}
            styles={styles}
          />
          <PasswordFields checkIsEnterPressed={keyUpHandler} styles={styles} />
          <Box className={styles.formRow}>
            <DateOfBorn />
            <StateAndCity checkIsEnterPressed={keyUpHandler} styles={styles} />
          </Box>

          {error && (
            <Typography variant="body1" color="error">
              {errorMessage}
            </Typography>
          )}

          {loading ? (
            <Button
              className={styles.loginBtn}
              color="secondary"
              variant="contained"
              disabled
            >
              <CircularProgress />
            </Button>
          ) : (
            <Button
              className={styles.loginBtn}
              color="primary"
              variant="contained"
              onClick={submitSignUp}
            >
              Kreiraj nalog
            </Button>
          )}
        </Box>
      </LocalizationProvider>
    </Modal>
  );
}

export default SignUpModal;
