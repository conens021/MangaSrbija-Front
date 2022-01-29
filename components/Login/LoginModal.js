import {
  Box,
  Button,
  CircularProgress,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "universal-cookie";

import { signIn } from "../../api/users";

function LoginModal({ styles }) {
  const cookies = new Cookies();

  const [userName, setUsername] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const loginModalVisible = useSelector((state) => state.showLoginModal);

  const dispatch = useDispatch();

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitLogin = async () => {
    try {
      setLoading(true);
      const response = await signIn(userName, password);
      setError(false);
      cookies.set("user", response, { path: "/" });
      dispatch({ type: "USER_LOGIN" });
      closeLoginModal();
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
      submitLogin();
    }
  };

  const closeLoginModal = () => {
    setError(false);
    dispatch({ type: "CLOSE_LOGIN_MODAL" });
  };

  return (
    <Modal
      open={loginModalVisible}
      onClose={closeLoginModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box bgcolor="background.default" className={styles.loginModal}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Uloguj se
        </Typography>
        <TextField
          color=""
          id="name"
          label="Korisničko ime"
          margin="normal"
          InputProps={{ disableUnderline: true }}
          onChange={usernameChangeHandler}
          onKeyUp={keyUpHandler}
          required
        />
        <TextField
          id="outlined-password-input"
          label="Lozinka"
          type="password"
          autoComplete="current-password"
          onChange={passwordChangeHandler}
          onKeyUp={keyUpHandler}
          required
        />
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
            onClick={submitLogin}
            disabled
          >
            <CircularProgress />
          </Button>
        ) : (
          <Button
            className={styles.loginBtn}
            color="secondary"
            variant="contained"
            onClick={submitLogin}
          >
            Uloguj Se
          </Button>
        )}
      </Box>
    </Modal>
  );
}

export default LoginModal;
