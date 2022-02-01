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
import styled from "styled-components";
import { Box, Paper, Typography } from "@mui/material";
import {MenuListItem} from '../../UI/MenuList/MenuListItem'

function SideMenu() {

  const router = useRouter();

  const page = router.asPath


  return (
    <Box>
      <Link href="/" replace>
        <MenuListItem selected = {page === "/"}>
          <Box disablePadding sx={{ display: "flex", alignItems: "center" }}>
            <ListItemIcon className="itemIcon">
              <HomeIcon />
            </ListItemIcon>
            <Typography>Pocetna</Typography>
          </Box>
        </MenuListItem>
      </Link>
      <Link href="/popularno" replace>
      <MenuListItem selected = {page === "/popularno"}>
          <Box disablePadding sx={{ display: "flex", alignItems: "center" }}>
            <ListItemIcon className="itemIcon">
              <HomeIcon />
            </ListItemIcon>
            <Typography>Popuplarne mange</Typography>
          </Box>
        </MenuListItem>
      </Link>
      <Link href="/lista-mangi" replace>
      <MenuListItem selected = {page === "/lista-mangi"}>
          <Box disablePadding sx={{ display: "flex", alignItems: "center" }}>
            <ListItemIcon className="itemIcon">
              <ViewListIcon />
            </ListItemIcon>
            <Typography>Lista mangi</Typography>
          </Box>
        </MenuListItem>
      </Link>
      <Link href="/lista-mangi" replace>
      <MenuListItem selected = {page === "/nova-izdanja"}>
          <Box disablePadding sx={{ display: "flex", alignItems: "center" }}>
            <ListItemIcon className="itemIcon">
              <LocalOfferIcon />
            </ListItemIcon>
            <Typography>Nova izdanja</Typography>
          </Box>
        </MenuListItem>
      </Link>
      <Link href="/lista-mangi" replace>
        <MenuListItem>
          <Box disablePadding sx={{ display: "flex", alignItems: "center" }}>
            <ListItemIcon className="itemIcon">
              <ScreenSearchDesktopIcon />
            </ListItemIcon>
            <Typography>Napredna pretraga</Typography>
          </Box>
        </MenuListItem>
      </Link>

      <Link href="/lista-mangi" replace>
        <MenuListItem>
          <Box disablePadding sx={{ display: "flex", alignItems: "center" }}>
            <ListItemIcon className="itemIcon">
              <BookmarksIcon />
            </ListItemIcon>
            <Typography>Kolekcije</Typography>
          </Box>
        </MenuListItem>
      </Link>
    </Box>
  );
}

export default SideMenu;
