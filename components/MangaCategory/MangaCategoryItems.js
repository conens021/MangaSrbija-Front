import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getCategoryMangas } from "../../api/categories";
import MangaGridWithInfo from "../UI/MangaList/MangaGridWithInfo";

function MangaCategory({mangas,category}) {

    const orderBy = useSelector((state) => state.orderBy);
    const [mangasData, setMangasData] = useState(mangas);

    useEffect(() => {
     setMangasData(mangas)
    },[mangas])
  
    useEffect(() => {
      if (orderBy !== "") {
        getMangas();
      }
    }, [orderBy]);
  
    async function getMangas() {
      console.log("calling server...")
      const response = await getCategoryMangas(category, 1, orderBy);
      const updatedMangaData = response.mangas;
      setMangasData(updatedMangaData);
    }

    return(
        <MangaGridWithInfo mangas={mangasData}/>
    )
  
}

export default MangaCategory;