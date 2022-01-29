import { AccountCircle } from "@mui/icons-material";
import { IconButton, Menu, MenuItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Cookies from "universal-cookie";

function UserMenu({ styles }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const dispatch = useDispatch();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutHandler = () => {
    const cookies = new Cookies();
    cookies.remove('user')
    dispatch({ type: "USER_LOGOUT" });
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
      <Box>
        <Typography variant="text-body">@Cone021</Typography>
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
