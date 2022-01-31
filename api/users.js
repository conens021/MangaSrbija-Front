import axios from "axios";
import { API_BASE, MANGAS, USERS, AUTH } from "./constants";

export const signIn = (username, password) => {
  const userDetails = {
    username,
    password,
  };
  return axios
    .post(`${API_BASE}/${AUTH}`, userDetails)
    .then((r) => {
      return r.data;
    })
    .catch((e) => {
      throw e;
    });
};

export const rateManga = (mangaId, rating, jwt) => {
  const ratingData = {
    rating,
  };
  return axios
    .post(`${API_BASE}/${MANGAS}/${mangaId}/rate`, ratingData, {
      headers: { Authorization: `Bearer ${jwt}` },
    })
    .then((r) => {
      return r.data;
    })
    .catch((e) => {
      throw e;
    });
};

export const mangaToFavorites = (mangaId, jwt) => {
  const favoriteData = {
    mangaId
  };
  return axios
    .post(`${API_BASE}/${USERS}/favorites`, favoriteData, {
      headers: { Authorization: `Bearer ${jwt}` },
    })
    .then((r) => {
      return r.data;
    })
    .catch((e) => {
      throw e;
    });
};

export const deleteMangaFromFavorites = (mangaId, jwt) => {
  return axios
    .delete(`${API_BASE}/${USERS}/favorites/${mangaId}`, {
      headers: { Authorization: `Bearer ${jwt}` },
    })
    .then((r) => {
      return r.data;
    })
    .catch((e) => {
      throw e;
    });
};



export const getFavoriteMangas = (jwt) => {
  return axios
    .get(`${API_BASE}/${USERS}/favorites`, {
      headers: { Authorization: `Bearer ${jwt}` },
    })
    .then((r) => {
      return r.data;
    })
    .catch((e) => {
      throw e;
    });
};
