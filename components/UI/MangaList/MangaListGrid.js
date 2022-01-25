
import styles from '../../../styles/mangaList/MangaListGrid.module.css'
import MangaListItem from './MangaListItem';

function MangaListGrid({ mangas }) {

  return (
    <div className={styles.mangaListGrid}>
      {mangas.map((manga) => (
        <div key={manga.id} className={styles.mangaSingleItem}>
            <MangaListItem m = {manga}/>
        </div>
      ))}
    </div>
  );
}

export default MangaListGrid;
