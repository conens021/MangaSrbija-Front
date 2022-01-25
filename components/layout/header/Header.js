import { Box, Container, CssBaseline } from "@mui/material";
import Link from "next/link";
import styles from "../../../styles/template/Header.module.css";
import HeaderSearch from "../../Search/headerSearch";
import HeaderAuth from "./HeaderAuth";

function Header() {
  return (
    <Box bgcolor={"background.default"} className={styles.headerBox}>
      <header className={styles.header}>
        <Link href="/" replace>
          <h2 className={styles.logo}>MANGA SRBIJA</h2>
        </Link>
        <HeaderSearch styles={styles} />
        <HeaderAuth styles={styles} />
      </header>
    </Box>
  );
}

export default Header;
