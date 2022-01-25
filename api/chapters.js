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