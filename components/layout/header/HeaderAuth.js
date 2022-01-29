import {Button} from "@mui/material";
import { useDispatch } from "react-redux";
import LoginModal from "../../Login/LoginModal";

function HeaderAuth({ styles }) {

  const dispatch = useDispatch()

  const showLoginModal = () => {
    dispatch({type:'SHOW_LOGIN_MODAL'})
  }
  
  return (
    <div className={styles.headerAuth}>
      <Button color="secondary" variant="contained" onClick={showLoginModal}>
        Uloguj Se
      </Button>
      <Button color="primary" variant="contained">
        Otvori Nalog
      </Button>

      <LoginModal styles={styles}/>
    </div>
  );
}

export default HeaderAuth;
