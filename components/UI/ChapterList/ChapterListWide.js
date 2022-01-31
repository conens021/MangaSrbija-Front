import { Box } from "@mui/system";
import Image from "next/image";
import "react-multi-carousel/lib/styles.css";
import styles from "../../../styles/Home.module.css";
import { Fragment } from "react";
import Link from "next/link";
import { imageLoader } from "../../../helpers/imageLoader";

function ChapterListWide({ chapters }) {
  const renderSingleChapter = (chapter) => {
    return (
      <Fragment>
        <div className={styles.imageWrapper}>
          <Image
            loader={imageLoader}
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
        <Link  key={chapter.chapterId} href={`/poglavlje/${chapter.chapterId}`}>
          <Box
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
