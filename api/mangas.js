import axios from "axios";
import { API_BASE, MANGAS } from "./constants";

export const getRecentlyAdded = () => {
  console.log("CALLING SERVER")
  return axios
    .get(`${API_BASE}/${MANGAS}/recenlty-added`)
    .then((r) => {
      return r.data;
    })
    .catch((e) => {
      console.log("greska u getRecentlyAdded");
      throw e;
    });
};

export const getByLetter = (page = 1,perPage = 2,orderBy="az",letter = "all") => {
  const url = `${API_BASE}/${MANGAS}/letter/${letter}/?page=${page}&perPage=${perPage}&orderBy=${orderBy}`
  console.log("CALLING SERVER")
  return axios
  .get(url)
  .then((r) => {
    console.log(r.data)
    return r.data;
  })
  .catch((e) => {
    console.log("greska u getByLetter");
    throw e;
  });
}


export const getMostPopular = (page = 1,perPage = 2) => {
  console.log("CALLING SERVER")

  return axios
  .get(`${API_BASE}/${MANGAS}/most-popular?page=${page}&perPage=${perPage}`)
  .then((r) => {
    return r.data;
  })
  .catch((e) => {
    console.log("greska u getRecentlyAdded");
    throw e;
  });
}

export const getTopRated = () => {
  console.log("CALLING SERVER")

  return axios
    .get(`${API_BASE}/${MANGAS}/top-rated`)
    .then((r) => {
      return r.data;
    })
    .catch((e) => {
      console.log("greska u getRecentlyAdded");
      throw e;
    });
};

export const countMangas = () => {
  console.log("CALLING SERVER")

  return axios
    .get(`${API_BASE}/${MANGAS}/count`)
    .then((r) => {
      return r.data;
    })
    .catch((e) => {
      console.log("greska u getRecentlyAdded");
      throw e;
    });
};


export const getMangaById = (id) => {

  console.log("CALLING MANGA ID SERVER")

  return axios
    .get(`${API_BASE}/${MANGAS}/${id}`)
    .then((r) => {
      return r.data;
    })
    .catch((e) => {
      console.log("greska u getRecentlyAdded");
      throw e;
    });
}




