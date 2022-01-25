import axios from "axios";

import {API_BASE,CATEGORIES} from './constants'

export const getCategories = () => {
  return axios
    .get(`${API_BASE}/${CATEGORIES}`)
    .then((r) => {
      return r.data;
    })
    .catch((e) => {
      console.log("greska");
      throw e;
    });
};

export const getCategoryMangas = (name,page,orderBy) => {
  return axios
    .get(`${API_BASE}/${CATEGORIES}/${name}?page=${page}&ob=${orderBy}` )
    .then((r) => {

      return r.data;
    })
    .catch((e) => {
      throw e;
    });
};
