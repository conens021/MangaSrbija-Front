import {Button} from "@mui/material";
import { useDispatch } from "react-redux";
import LoginModal from "../../Login/LoginModal";
import SignUpModal from "../../SignUp.js/SignUp";

function HeaderAuth({ styles }) {

  const dispatch = useDispatch()

  const showLoginModal = () => {
    dispatch({type:'SHOW_LOGIN_MODAL'})
  }

  const showSignUpModal = () => {
    dispatch({type:'SHOW_SIGNUP_MODAL'})
  }
  
  return (
    <div className={styles.headerAuth}>
      <Button color="secondary" variant="contained" onClick={showLoginModal}>
        Uloguj Se
      </Button>
      <Button color="primary" variant="contained" onClick={showSignUpModal}>
        Otvori Nalog
      </Button>

      <LoginModal styles={styles}/>
      <SignUpModal styles={styles}/>

    </div>
  );
}

export default HeaderAuth;
