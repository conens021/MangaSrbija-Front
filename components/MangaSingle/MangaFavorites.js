import { Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Fragment, useEffect, useState } from "react";
import { getFavoriteMangas,mangaToFavorites,deleteMangaFromFavorites } from "../../api/users";
import { itemInListByProperty } from "../../helpers/isItemInListByProperty";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";

function MangaFavorites({ user, manga }) {
  const [usersFavorites, setUsersFavorites] = useState([]);
  const [mangaIsUserFavorite, setMangaIsUserFavorite] = useState(false);

  useEffect(() => {
    const isItemInFavorites = itemInListByProperty(
      usersFavorites,
      "id",
      manga.id
    );
    setMangaIsUserFavorite(isItemInFavorites);
  }, [usersFavorites]);

  useEffect(() => {
    if (user) {
      getUserFavorites();
    }
  }, [user]);

  const getUserFavorites = async () => {
    try {
      const response = await getFavoriteMangas(user.jwt);
      setUsersFavorites(response);
    } catch (e) {
      console.log(e.response);
      console.log(e.request);
    }
  };

  const deleteMangaFromUserFavoriteHandler = async () => {
    try {
      const response = await deleteMangaFromFavorites(manga.id, user.jwt);
      setMangaIsUserFavorite(false);
    } catch (e) {
      console.log(e);
      console.log(e.response);
      console.log(e.request);
    }
  };

  const mangaToUserFavoritesHandler = async () => {
    try {
      const response = await mangaToFavorites(manga.id, user.jwt);
      setMangaIsUserFavorite(true)
    } catch (e) {
      console.log(e.response);
      console.log(e.request);
    }
  };

  return (
    <Fragment>
      {!mangaIsUserFavorite ? (
        <Button
          color="primary"
          variant="outlined"
          startIcon={<FavoriteIcon />}
          onClick={mangaToUserFavoritesHandler}
        >
          Favoriti
        </Button>
      ) : (
        <Button
          color="primary"
          variant="outlined"
          startIcon={<HeartBrokenIcon />}
          onClick={deleteMangaFromUserFavoriteHandler}
        >
          Izbaci iz favorita
        </Button>
      )}
    </Fragment>
  );
}

export default MangaFavorites;
