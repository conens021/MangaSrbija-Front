import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import { ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import store from "../store/categoryMangasStore";
import { darkTheme, lightTheme } from "../theming/index";
import { Container, CssBaseline } from "@mui/material";

function MyApp({ Component, pageProps, hotReleases }) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Provider store={store}>
        <Layout hotReleases={hotReleases}>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
