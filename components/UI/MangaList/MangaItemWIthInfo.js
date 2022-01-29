import { IMAGES_FOLDER } from "../../../api/constants";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import { Link, Paper, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";

import { cropPhrase } from "../../../helpers/cropPhrase";
import RateManga from "../../RateManga/RateManga";

function MangaItemWithInfo({ manga, styles, cropSummary }) {


  useEffect(() => {
    renderManga();
  }, [manga]);

  const renderSummary = () => {
    if (cropSummary) {
      const newSummary = cropPhrase(manga.summary, 0, 176);
      return <Typography variant="body2" sx={{fontSize:'.75rem'}}>{newSummary}</Typography>;
    }
    return <Typography variant="body2">{manga.summary}</Typography>;
  };

  const renderManga = () => {
    if (manga) {
      const src = IMAGES_FOLDER + "/" + manga.coverPhoto;
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
                <Typography sx={{ marginRight: ".6em" }}>Žanrovi :</Typography>
                {renderMangaCategories(manga.categories)}
              </div>
              <div style={{ display: "flex", columnGap: ".6em" }}>
                <Typography>Tip :</Typography>{" "}
                <Link color="secondary">{manga.type}</Link>
              </div>
              <div>
                <Box sx={{ marginBottom: ".5em" }}>
                  <Typography>Opis:</Typography>
                </Box>
                {renderSummary()}
              </div>
              <Box sx={{display:'flex',columnGap:'.4em',flex:'1',alignItems:'center'}}>
                <Typography component="legend">Oceni mangu:</Typography>
                <RateManga manga={manga}/>
              </Box>
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
  };

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

  return <Fragment>{renderManga()}</Fragment>;
}

export default MangaItemWithInfo;
