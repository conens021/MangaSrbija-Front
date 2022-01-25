import React from "react";
import Header from "./header/Header";
import Footer from "./Footer";
import { Fragment } from "react";

import styles from "../../styles/template/Template.module.css";
import { Box, Container } from "@mui/material";

function Layout({ children }) {
  return (
    <Fragment>
      <Box>
        <Header />
        {children}
      </Box>
    </Fragment>
  );
}

export default Layout;
