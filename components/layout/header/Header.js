import { Box } from "@mui/material";
import Link from "next/link";
import { useSelector } from "react-redux";
import styles from "../../../styles/template/Header.module.css";
import HeaderSearch from "../../Search/headerSearch";
import HeaderAuth from "./HeaderAuth";
import UserMenu from "./UserMenu";

function Header() {
  const userLogedIn = useSelector((state) => state.userLogedIn);

  return (
    <Box bgcolor={"background.default"} className={styles.headerBox}>
      <header className={styles.header}>
        <Link href="/" replace>
          <h2 className={styles.logo}>MANGA SRBIJA</h2>
        </Link>
        <HeaderSearch styles={styles} />
        {!userLogedIn ? <HeaderAuth styles={styles} /> : <UserMenu styles={styles} />}
      </header>
    </Box>
  );
}

export default Header;
