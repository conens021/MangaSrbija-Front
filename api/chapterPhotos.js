import axios from "axios";
import { API_BASE, CHAPTERS } from "./constants";

export const getAllByChapter = (chapterId) => {
    return axios
      .get(`${API_BASE}/${CHAPTERS}/${chapterId}/photos`)
      .then((r) => {
        return r.data;
      })
      .catch((e) => {
        console.log("greska u chapter photos");
        throw e;
      });
  };