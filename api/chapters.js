import axios from "axios";
import { API_BASE, CHAPTERS } from "./constants";

export const getHotReleases = () => {
    console.log(`${API_BASE}/${CHAPTERS}/new-releases`)
    return axios
      .get(`${API_BASE}/${CHAPTERS}/new-releases`)
      .then((r) => {
        return r.data;
      })
      .catch((e) => {
        console.log("greska u getHotReleases");
        throw e;
      });
  };

  export const getChapterById = (chapterId) => {
    return axios
      .get(`${API_BASE}/${CHAPTERS}/${chapterId}`)
      .then((r) => {
        return r.data;
      })
      .catch((e) => {
        console.log(e)
        throw e;
      });
  };

  export const getAllByManga = (mangaId) => {
    return axios
      .get(`${API_BASE}/${CHAPTERS}/manga/${mangaId}`)
      .then((r) => {
        return r.data;
      })
      .catch((e) => {
        console.log(e)
        throw e;
      });
  };

  export const getAllIds = () => {
    return axios
      .get(`${API_BASE}/${CHAPTERS}`)
      .then((r) => {
        return r.data;
      })
      .catch((e) => {
        console.log(e)
        throw e;
      });
  };