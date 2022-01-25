import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MangaListSmallGrid from "../UI/MangaList/SmallListGrid/MangaListSmallGrid";
import { getByLetter } from "../../api/mangas";

function MangaListItems({ mangas, perPage }) {

  const page = useSelector((state) => state.page);

  const startingLetter = useSelector((state) => state.startingLetter);

  const [mangasData, setMangasData] = useState(mangas);

  useEffect(() => {
    if (page !== 0) {
      getMangasByPage();
    }
  }, [page]);

  useEffect(() => {
    if (startingLetter !== "") {
      if (startingLetter === "#") {
        getMangasByLetter("all");
        console.log(`Getting all mangas`);
        return;
      }
      getMangasByLetter(startingLetter);
    }
  }, [startingLetter]);

  async function getMangasByPage() {
    const letter = startingLetter === "#" || startingLetter === "" ? "all" : startingLetter;
    const updatedMangas = await getByLetter(page, perPage, "az", letter);
    setMangasData(updatedMangas);
  }

  async function getMangasByLetter(letter) {
    const updatedMangas = await getByLetter(1, perPage, "az", letter);
    console.log(updatedMangas);
    setMangasData(updatedMangas);
  }

  return <MangaListSmallGrid mangas={mangasData} />;
}

export default MangaListItems;
