
import styles from '../../styles/template/Footer.module.css'
import Image from 'next/image'
import { Box } from "@mui/material";

function Footer() {
  return (
 
    <footer className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{" "}
        <span className={styles.logo}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </footer>
  
  );
}

export default Footer;
