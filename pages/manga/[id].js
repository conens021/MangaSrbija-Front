import Head from "next/head";
//styles
import styles from "../../styles/mangaSingle/MangaSingle.module.css";
//API
import { getMangaById, getAllMangaIds } from "../../api/mangas";
import { getCategories } from "../../api/categories";
import { getAllByManga } from "../../api/chapters";
//components
import SideBar from "../../components/layout/SideBar/SideBar";
import { Box } from "@mui/material";
import { useRefreshState } from "../../store/useRefreshState";
import { useRouter } from "next/router";
import MangaHeading from "../../components/MangaSingle/MangaHeading";
import { Fragment, useEffect } from "react";
import MangaItemWithInfo from "../../components/UI/MangaList/MangaItemWIthInfo";
import ChapterList from "../../components/CapterList/ChapterList";

function MangaSingle({manga = {},categories = [],chapters = []}) {
  
  const router = useRouter();

  const [refreshState] = useRefreshState();

  useEffect(() => {
    router.events.on("routeChangeStart", refreshState);

    return () => {
      router.events.off("routeChangeStart", refreshState);
    };
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Manga Srbija | Naruto Manga</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box bgcolor={"background.default"} className="container">
        <SideBar categories={categories} />
        <main className={styles.main}>
          <MangaHeading manga={manga} styles={styles} />
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "3fr 1fr",
              columnGap: "1em",
              alignItems: "start",
              height: "100%",
            }} >
            <Box sx={{ display: "flex", flexDirection: "column", rowGap: "2em" }} >
              <MangaItemWithInfo
                cropSummary={false}
                manga={manga}
                styles={styles}
              />
            </Box>
            <ChapterList chapters={chapters} width={360} />
          </Box>
        </main>
      </Box>
    </Fragment>
  );
}

export async function getStaticProps({ params }) {
  const categories = await getCategories();
  const manga = await getMangaById(params.id);
  const chapters = await getAllByManga(params.id);
  return {
    props: {
      manga,
      categories,
      chapters,
    },
  };
}

export async function getStaticPaths() {

  const mangaIds = await getAllMangaIds();

  const paths = mangaIds.map((id) => {
    return {
      params: { id: id.toString() },
    };
  });

  return {
    fallback: true,
    paths,
  };
}

export default MangaSingle;
