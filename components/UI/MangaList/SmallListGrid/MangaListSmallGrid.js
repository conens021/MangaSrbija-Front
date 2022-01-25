import { Paper } from "@mui/material";
import styles from "../../../../styles/mangaList/MangaListSmallGrid.module.css";
import MangaListSmallItem from "./MangaListSmallItem";

function MangaListSmallGrid({ mangas }) {
  return (
    <div className={styles.mangaListGrid}>
      {mangas.map((manga) => (
        <Paper
          key={manga.id}
          elevation={3}
          sx={{ padding: "1em" }}
          className={styles.mangaSingleItem}
        >
          <MangaListSmallItem manga={manga} />
        </Paper>
      ))}
    </div>
  );
}

export default MangaListSmallGrid;
