import styles from "../../styles/mangaList/MangaListSmallGrid.module.css";
import MangaListSmallItem from "../UI/MangaList/SmallListGrid/MangaListSmallItem";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { getFavoriteMangas } from "../../api/users";
import AppPagination from "../UI/AppPagination";
import { Fragment, useEffect, useState } from "react";
import DeleteMangaFavorite from "./DeleteMangaFavorite";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

const perPage = 40;

function UserFavoritesGrid() {
  const user = useSelector((state) => state.user);

  const [pages, setPages] = useState(1);
  const [mangas, setMangas] = useState([]);

  useEffect(() => {
    if (user) {
      getUserFavoriteMangas();
    }
  }, [user]);

  useEffect(() => {
    const pageNum =
      mangas.length === 0 ? 1 : Math.ceil(mangas.length / perPage);
    setPages(pageNum);
  }, [mangas]);

  const getUserFavoriteMangas = async () => {
    try {
      const mangaData = await getFavoriteMangas(user.jwt);
      setMangas(mangaData);
    } catch (e) {
      console.log(e);
      console.log(e.request);
      console.log(e.response);
    }
  };

  const deleteManga = (mangaId) => {
    const mangasFiltered = mangas.filter((m) => m.id !== mangaId);
    setMangas(mangasFiltered);
  };

  return (
    <Fragment>
      {mangas.length > 0 && (
        <div className={styles.mangaListGrid}>
          {mangas.map((manga) => (
            <div
              key={manga.id}
              style={{
                display: "flex",
                flexDirection: "column",
                position: "relative",
              }}
            >
              <MangaListSmallItem styles={styles} manga={manga} />
              <DeleteMangaFavorite
                mangaId={manga.id}
                deleteManga={deleteManga}
                user={user}
              />
              <div>
                <AppPagination pages={pages} />
              </div>
            </div>
          ))}
        </div>
      )}

      {!mangas ||
        (mangas.length === 0 && (
          <Box
            style={{
              height: "100% ",
              maxHeight:'450px',
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection:'column',
              rowGap:'.5em'
            }}
          >
            <Typography variant="h6">Jos uvek nemate omiljene mange</Typography>
            <Link href="/lista-mangi" replace><Button>Pretraži mange</Button></Link>
          </Box>
        ))}
    </Fragment>
  );
}

export default UserFavoritesGrid;
