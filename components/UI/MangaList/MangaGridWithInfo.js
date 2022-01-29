import styles from "../../../styles/mangaList/MangaGridInfo.module.css";
import MangaItemWithInfo from "./MangaItemWIthInfo";

function MangaGridWithInfo({ mangas,cropSummary }) {
  return (
    <div className={styles.grid}>
      {mangas.map((manga) => <MangaItemWithInfo cropSummary={cropSummary} manga={manga} styles={styles}/>)}
    </div>
  );
}

export default MangaGridWithInfo;
