import { Box } from "@mui/system";
import Image from "next/image";
import "react-multi-carousel/lib/styles.css";
import styles from "../../../styles/Home.module.css";
import { IMAGES_FOLDER } from "../../../api/constants";
import { Fragment } from "react";
import Link from "next/link";

function ChapterListWide({ chapters }) {
  const renderSingleChapter = (chapter) => {
    const src = `${IMAGES_FOLDER}/${chapter.coverPhoto}`;
    return (
      <Fragment>
        <div className={styles.imageWrapper}>
          <Image
            loader={() => src}
            src={chapter.coverPhoto}
            width={90}
            height={90}
            sx={styles.imgRounded}
            quality={100}
          />
        </div>
        <div>
          <h4>{chapter.mangaTitle}</h4>
        </div>
        <div>{chapter.chapterName}</div>
      </Fragment>
    );
  };

  return (
    <Box sx={{ display: "flex", columnGap: ".7em" }}>
      {chapters.map((chapter) => (
        <Link href={`/manga/${chapter.mangaId}`}>
          <Box
            key={chapter.chapterId}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "5px",
              cursor: "pointer",
            }}
          >
            {renderSingleChapter(chapter)}
          </Box>
        </Link>
      ))}
    </Box>
  );
}

export default ChapterListWide;
