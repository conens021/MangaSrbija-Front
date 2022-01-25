import styles from "../../styles/category/Category.module.css";
import Head from "next/head";
import { getCategories, getCategoryMangas } from "../../api/categories";
import { useRouter } from "next/router";
import SideBar from "../../components/layout/SideBar/SideBar";
import MangaCategorySorting from "../../components/MangaCategory/MangaCategorySorting";
import CategoryTags from "../../components/MangaCategory/CategoryTags";
import AppPagination from "../../components/UI/AppPagination";
import MangaCategoryItems from "../../components/MangaCategory/MangaCategoryItems";
import { Fragment,useEffect } from "react";
import { useDispatch } from "react-redux";
import { Box } from "@mui/system";
import { useRefreshState } from "../../store/useRefreshState";


function CategoryPage(props) {

  const router = useRouter();
  const dispatch = useDispatch();
  const { categories } = props;
  const { mangas } = props;
  const categoryName = router.query.name;
  const [refreshState] = useRefreshState()

  useEffect(() => {
    dispatch({ type: "SET_ORDER_BY", orderBy: "" });
    console.log("dispatching action...");
  }, [router]);

  useEffect(() => {
  
    router.events.on("routeChangeStart", refreshState);

    return () => {
      router.events.off("routeChangeStart", refreshState);

    };
  }, []);


  return (
    <Fragment>
      <Head>
        <title>Manga Srbija | {categoryName}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box bgcolor={"background.default"} className="container">
        <SideBar categories={categories} />
        <main className={styles.main}>
          <div className={styles.categoryContainer}>
            <div className={styles.pageTitle}>
              <h1>Kategorija : {categoryName}</h1>
              <div className={styles.sort}>
                <span>SORTIRAJ:</span>
                <MangaCategorySorting />
              </div>
            </div>
            <div className={styles.pageDescription}>
              Najveća kolekcija {categoryName} mangi na Balkanu!
            </div>
            <div className={styles.categoryTags}>
              <CategoryTags categories={categories} selected={categoryName} />
            </div>
            <div>
              <MangaCategoryItems mangas={mangas} category={categoryName} />
            </div>
            <div className={styles.pagination}>
              <AppPagination />
            </div>
          </div>
        </main>
      </Box>
    </Fragment>
  );
}

export async function getStaticProps(context) {
  const categories = await getCategories();

  const { params } = context;

  const categoryName = params.name;

  const mangasData = await getCategoryMangas(categoryName, 1, "az");

  console.log(mangasData);

  return {
    props: {
      categories: categories,
      mangas: mangasData.mangas,
    },
  };
}

export async function getStaticPaths() {
  const categories = await getCategories();

  const paths = categories.map((category) => {
    return {
      params: { name: category.name },
    };
  });

  return {
    fallback: true,
    paths,
  };
}

export default CategoryPage;