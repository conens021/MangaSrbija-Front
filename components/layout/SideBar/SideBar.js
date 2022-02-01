import Link from "next/link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import styles from "../../../styles/template/SideBar.module.css";

import SideMenu from "./SideMenu";
import { useRouter } from "next/router";
import { Box } from "@mui/system";
import { Paper } from "@mui/material";

function SideBar({ categories }) {
  const router = useRouter();
  const pagePath = router.asPath;

  const renderCategories = () => {
    if (categories) {
      return categories.map((c) => (
        <Link key={c.id} href={`/kategorije/${c.name}`} replace>
          <ListItem disablePadding>
            <ListItemButton
              selected={pagePath === `/kategorije/${c.name}` && true}
            >
              <ListItemText primary={c.name} />
            </ListItemButton>
          </ListItem>
        </Link>
      ));
    }
  };

  return (
   <Paper elevation={6} sx={{backgroundColor : "background.default"}} className={styles.sideBar}>
      <h4 className={styles.menuTitle}>Meni</h4>

      <SideMenu />

      <h4 className={styles.menuTitle}>Kategorije</h4>

      <List>{renderCategories()}</List>
    </Paper>
  );
}

export default SideBar;
