import { Box } from "@mui/material";
import Link from "next/link";
import styles from "../../../styles/template/Header.module.css";
import HeaderSearch from "../../Search/headerSearch";
import HeaderAuth from "./HeaderAuth";
import UserMenu from "./UserMenu";
import {useAuthCheck} from '../../../helpers/useAuthCheck'
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function Header() {

  const [userLogedIn,setUserLogedIn,user] = useAuthCheck();
  const dispatch = useDispatch();

  useEffect(() => {
    if(user){
      dispatch({type:"SET_USER",user})
    }
  },[user])

  const userLogoutHandler = () => {
    setUserLogedIn(false) 
  }

  return (
    <Box bgcolor={"background.default"} className={styles.headerBox}>
      <header className={styles.header}>
        <Link href="/" replace>
          <h2 className={styles.logo}>MANGA SRBIJA</h2>
        </Link>
        <HeaderSearch styles={styles} />
        {!userLogedIn ? <HeaderAuth styles={styles} /> : 
        <UserMenu userLogout={userLogoutHandler} styles={styles}/>}
      </header>
    </Box>
  );
}

export default Header;
