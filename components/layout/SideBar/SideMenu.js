import HomeIcon from "@mui/icons-material/Home";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import ViewListIcon from "@mui/icons-material/ViewList";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import ListItemIcon from "@mui/material/ListItemIcon";
import Link from "next/link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useRouter } from "next/router";

function SideMenu() {
  const router = useRouter();

  return (
    <List>
      <Link href="/" replace>
        <ListItem disablePadding>
          <ListItemButton selected={router.pathname === "/" && true}>
            <ListItemIcon>
              <HomeIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Početna" />
          </ListItemButton>
        </ListItem>
      </Link>
      <Link href="/popularno" replace>
        <ListItem disablePadding>
          <ListItemButton selected={router.pathname === "/popularno" && true}>
            <ListItemIcon>
              <LocalFireDepartmentIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Popularna manga" />
          </ListItemButton>
        </ListItem>
      </Link>
      <Link href="/lista-mangi" replace>
        <ListItem disablePadding>
        <ListItemButton selected={router.pathname === "/lista-mangi" && true}>
            <ListItemIcon>
              <ViewListIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Lista Mangi" />
          </ListItemButton>
        </ListItem>
      </Link>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <LocalOfferIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Nova Izdanja" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <ScreenSearchDesktopIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Napredna pretraga" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <BookmarksIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Kolekcija" />
        </ListItemButton>
      </ListItem>
    </List>
  );
}

export default SideMenu;
