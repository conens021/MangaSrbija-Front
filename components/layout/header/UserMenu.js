import { AccountCircle } from "@mui/icons-material";
import { IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "universal-cookie";

function UserMenu({ styles,userLogout }) {

  const [anchorEl, setAnchorEl] = useState(null);

  const dispatch = useDispatch();

  const user = useSelector(state => state.user)

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutHandler = () => {
    const cookies = new Cookies();
    cookies.remove("user");
    dispatch({ type: "USER_LOGOUT" });
    userLogout()
  };

  return (
    <Box
      sx={{
        flex: "1",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <Box sx={{ cursor: "pointer" }} onClick={handleMenu}>
        <Typography variant="text-body">@{user ? user.user.username : ''}</Typography>
      </Box>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Favoriti</MenuItem>
        <MenuItem onClick={handleClose}>Čitaj kasnije</MenuItem>
        <MenuItem onClick={handleClose}>Kolekcije</MenuItem>
        <MenuItem onClick={handleClose}>Profil</MenuItem>
        <MenuItem onClick={logoutHandler}>Odjavi se</MenuItem>
      </Menu>
    </Box>
  );
}

export default UserMenu;
