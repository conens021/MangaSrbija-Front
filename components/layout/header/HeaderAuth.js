import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useState } from "react";

function HeaderAuth({ styles }) {
  const [loginModalVisible, setLoginModalVisible] = useState(false);

  const showLoginModal = () => {
    setLoginModalVisible(!loginModalVisible);
  };

  const closeLoginModal = () => {
    setLoginModalVisible(false);
  };

  return (
    <div className={styles.headerAuth}>
      <Button color="secondary" variant="contained" onClick={showLoginModal}>
        Uloguj Se
      </Button>
      <Button color="primary" variant="contained">
        Otvori Nalog
      </Button>

      <Modal
        open={loginModalVisible}
        onClose={closeLoginModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          className={styles.loginModal}
          sx={{
        
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <TextField
            id="outlined-basic"
            label="Korisničko ime"
            variant="outlined"
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <Button
            color="secondary"
            variant="contained"
          >
            Uloguj Se
          </Button>
    
        </Box>
      </Modal>
    </div>
  );
}

export default HeaderAuth;
