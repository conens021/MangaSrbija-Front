import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getMostPopular } from "../../api/mangas";
import MangaGridWithInfo from "../UI/MangaList/MangaGridWithInfo";

function PopularMangaItems({ mangas }) {

  const page = useSelector(state => state.page)

  const [mangasData, setMangasData] = useState(mangas);

  useEffect(() => {
    if (page !== 0) {
      getMangas();
    }
  }, [page]);

  async function getMangas() {
    const response = await getMostPopular(page = page);
    const updatedMangaData = response;
    setMangasData(updatedMangaData);
  }

  return <MangaGridWithInfo mangas={mangasData} />;
}

export default PopularMangaItems;
