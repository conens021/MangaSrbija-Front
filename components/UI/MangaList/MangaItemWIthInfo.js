import { IMAGES_FOLDER } from "../../../api/constants";
import Image from "next/image";
import { Fragment } from "react";
import { Link, Paper } from "@mui/material";

function MangaItemWithInfo({ manga,styles }) {

  const src = IMAGES_FOLDER + "/" + manga.coverPhoto;

  const renderMangaCategories = (categories) => {
    const categoriesArray = categories.split(",");
    return categoriesArray.map((c) => (
      <Fragment>
        <Link color="secondary" href={`/kategorije/${c}`} replace>
          {c}
        </Link>
        {", "}
      </Fragment>
    ));
  };

  return (
    <Paper key={manga.id} className={styles.mangaSingle}>
      <div className={styles.mangaTop}>
        <div className={styles.mangaImage}>
          <Image loader={() => src} src={src} width={500} height={2000} />
        </div>
        <div className={styles.mangaInfo}>
          <div className={styles.mangaTitle}>
            <h2>{manga.title}</h2>
          </div>
          <div className={styles.mangaCategories}>
            {renderMangaCategories(manga.categories)}
          </div>
          <div className={styles.mangaSummary}>
            <p>{manga.summary}</p>
          </div>
        </div>
      </div>
      <div className={styles.mangaBottom}>
        <div>
          <div className={styles.typeTitle}>Tip</div>
          <div className={styles.typeValue}>{manga.type}</div>
        </div>
        <div>
          <div className={styles.typeTitle}>Pregledi</div>
          <div className={styles.typeValue}>{manga.views}</div>
        </div>
        <div>
          <div className={styles.typeTitle}>Rejting</div>
          <div className={styles.typeValue}>{manga.rating}/5</div>
        </div>
      </div>
    </Paper>
  );
}

export default MangaItemWithInfo;
