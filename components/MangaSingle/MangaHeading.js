import { Box, Button, Paper } from "@mui/material";
import { Fragment, useEffect } from "react";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import AddIcon from "@mui/icons-material/Add";
import { useSelector } from "react-redux";
import MangaFavorites from "./MangaFavorites";

function MangaHeading({ styles, manga }) {

  const user = useSelector((state) => state.user);

  useEffect(() => {
    renderManga();
  }, [manga]);

  const renderManga = () => {
    if (manga) {
      return (
        <Fragment>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <div className={styles.pageTitle}>
              <h1>{manga.title}</h1>
            </div>
            <div className={styles.pageDescription}>
              Naruto Manga Online Čitanje
            </div>
          </Box>
          <Box sx={{ display: "flex", columnGap: ".7em" }}>
            <MangaFavorites user={user} manga={manga}/>
            <Button
              color="secondary"
              variant="outlined"
              startIcon={<WatchLaterIcon />}
            >
              Čitaj Kasnije
            </Button>
            <Button color="success" variant="outlined" startIcon={<AddIcon />}>
              Kolekcije
            </Button>
          </Box>
        </Fragment>
      );
    }
  };

  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1em",
      }}
      elevation={3}
    >
      {renderManga()}
    </Paper>
  );
}

export default MangaHeading;
