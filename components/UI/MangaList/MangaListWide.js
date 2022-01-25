import styles from '../../../styles/mangaList/MangaListWide.module.css'
import MangaListItem from "./MangaListItem";

function MangaListWide({ mangas }) {
  return (
    <div className={styles.mangaListWide}>
      {mangas.map((manga) => (
        <div key={manga.id} className={styles.mangaSingleItem}>
          <MangaListItem styles={styles} m = {manga}/>
        </div>
      ))}
    </div>
  );
}
export default MangaListWide;
