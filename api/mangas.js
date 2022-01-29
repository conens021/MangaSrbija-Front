import axios from "axios";
import { API_BASE, MANGAS } from "./constants";

export const getRecentlyAdded = () => {
  return axios
    .get(`${API_BASE}/${MANGAS}?orderBy=rdd&page=1&perPage=10`)
    .then((r) => {
      return r.data;
    })
    .catch((e) => {
      console.log(e);
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
  return axios
    .get(`${API_BASE}/${MANGAS}?orderBy=BV&page=1&perPage=10`)
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


export const getAllMangaIds = () =>{
  return axios
    .get(`${API_BASE}/mangas-ids`)
    .then((r) => {
      console.log(r.data)
      return r.data;
    })
    .catch((e) => {
      console.log("greska u mangas ids");
      throw e;
    });
} 



