import styles from "../../../../styles/mangaList/MangaListSmallGrid.module.css";
import MangaListSmallItem from "./MangaListSmallItem";

function MangaListSmallGrid({ mangas }) {
  return (
    <div className={styles.mangaListGrid}>
      {mangas.map((manga) => (
        <MangaListSmallItem key={manga.id} styles={styles} manga={manga} />
      ))}
    </div>
  );
}

export default MangaListSmallGrid;
