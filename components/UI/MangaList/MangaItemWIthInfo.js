import Image from "next/image";
import { Fragment, useEffect } from "react";
import { Link, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { cropPhrase } from "../../../helpers/cropPhrase";
import RateManga from "../../RateManga/RateManga";
import { imageLoader } from "../../../helpers/imageLoader";

function MangaItemWithInfo({ manga, styles, cropSummary }) {
  useEffect(() => {
    renderManga();
  }, [manga]);

  const renderSummary = () => {
    if (cropSummary) {
      const newSummary = cropPhrase(manga.summary, 0, 176);
      return (
        <Typography variant="body2" sx={{ fontSize: ".75rem" }}>
          {newSummary}
        </Typography>
      );
    }
    return <Typography variant="body2">{manga.summary}</Typography>;
  };

  const renderManga = () => {
    if (manga) {
      return (
        <Paper className={styles.mangaSingle}>
          <div className={styles.mangaTop}>
            {cropSummary ? (
              <Link href={`/manga/${manga.id}`} replace>
                <div className={styles.mangaImage}>
                  <Image
                    loader={imageLoader}
                    src={manga.coverPhoto}
                    width={500}
                    height={750}
                  />
                </div>
              </Link>
            ) : (
              <div className={styles.mangaImage}>
                <Image
                  loader={imageLoader}
                  src={manga.coverPhoto}
                  width={500}
                  height={750}
                />
              </div>
            )}

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
              <Box
                sx={{
                  display: "flex",
                  columnGap: ".4em",
                  flex: "1",
                  alignItems: "center",
                }}
              >
                <Typography component="legend">Oceni mangu:</Typography>
                <RateManga manga={manga} />
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

  const renderMangaCategories = (categories = '') => {
    const categoriesArray = categories.split(",");
    return categoriesArray.map((c) => (
      <Fragment key={c}>
        <Link color="secondary" href={`/kategorije/${c}`} replace="true">
          {c}
        </Link>
        {", "}
      </Fragment>
    ));
  };

  return <Fragment key={manga.id}>{renderManga()}</Fragment>;
}

export default MangaItemWithInfo;
