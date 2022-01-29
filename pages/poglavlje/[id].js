import Head from "next/head";
//styles
import styles from "../../styles/chapterPhotos/ChapterPhotos.module.css";
//components
import ChapterActions from "../../components/Chapter/ChapterActions/ChapterActions";
import ChapterPhotoList from "../../components/Chapter/ChapterPhotoList";
import ChapterTitle from "../../components/Chapter/ChapterTitle";
//API
import { getAllByChapter } from "../../api/chapterPhotos";
import { getChapterById, getAllByManga } from "../../api/chapters";
import { getMangaById } from "../../api/mangas";
//external
import { useRouter } from "next/router";
import { getAllIds } from "../../api/chapters";
import { Fragment } from "react";
import { Box, Paper } from "@mui/material";

function ChapterPhotos(props) {
  const router = useRouter();

  const chapterId = router.query.id;

  const { chapterPhotos } = props;
  const { chapter } = props;
  const { mangaChapters } = props;
  const { manga } = props;

  return (
    <Fragment>
      <Head>
        <title>Manga Srbija | {manga.title} - {chapter.name}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box bgcolor={"background.default"} className="container">
        <main className={styles.main}>
          <Paper className={styles.chapterWrapper}
            elevation={3}>
            <ChapterTitle manga={manga} chapter={chapter} />
            <ChapterActions chapter={chapter} mangaChapters={mangaChapters}/>
            <ChapterPhotoList chapterPhotos={chapterPhotos} />
            <ChapterActions chapter={chapter} mangaChapters={mangaChapters}/>
          </Paper>
        </main>
      </Box>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const { params } = context;

  const chapterId = params.id;

  const chapterPhotos = await getAllByChapter(chapterId);

  const chapter = await getChapterById(chapterId);

  const mangaChapters = await getAllByManga(chapter.mangaId);

  const manga = await getMangaById(chapter.mangaId);

  return {
    props: {
      chapterPhotos,
      chapter,
      mangaChapters,
      manga,
    },
  };
}

export async function getStaticPaths() {
  const chapterIds = await getAllIds();

  const paths = chapterIds.map((id) => {
    return {
      params: { id: id.toString() },
    };
  });

  return {
    fallback: true,
    paths,
  };
}

export default ChapterPhotos;