import { Box, Button, Paper } from "@mui/material";
import { useEffect } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import AddIcon from '@mui/icons-material/Add';


function MangaInfo({ styles, manga }) {
  useEffect(() => {
    console.log(manga);
  }, []);

  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: '1em',
      }}
      elevation={3}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <div className={styles.pageTitle}>
          <h1>{manga.title}</h1>
        </div>
        <div className={styles.pageDescription}>
          Naruto Manga Online Čitanje
        </div>
      </Box>
      <Box sx={{ display: "flex", columnGap: ".7em" }}>
        <Button color="primary" variant="outlined" startIcon={<FavoriteIcon />}>
          Favoriti
        </Button>
        <Button color="secondary" variant="outlined" startIcon={<WatchLaterIcon/>}>
          Čitaj Kasnije
        </Button>
        <Button color="success" variant="outlined" startIcon={<AddIcon/>}>
          Kolekcije
        </Button>
      </Box>
    </Paper>
  );
}

export default MangaInfo;
