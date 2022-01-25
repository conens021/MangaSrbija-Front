import styles from "../../../styles/mangaList/MangaGridInfo.module.css";
import MangaItemWithInfo from "./MangaItemWIthInfo";

function MangaGridWithInfo({ mangas }) {
  return (
    <div className={styles.grid}>
      {mangas.map((manga) => <MangaItemWithInfo manga={manga} styles={styles}/>)}
    </div>
  );
}

export default MangaGridWithInfo;
