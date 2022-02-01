import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteFavoriteManga } from "../../api/users";

const DeleteManga = styled.div`
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  display: flex;
  justify-content: center;
  padding: 1em 0;
  & .icon {
    cursor: pointer;
    transition: color 0.2s ease-in;
  }
  & .icon:hover {
    color: red;
  }
`;

function DeleteMangaFavorite({ mangaId, deleteManga,user }) {

  const deleteMangaHandler = async () => {
    try {
      const response = await deleteFavoriteManga(user.jwt, mangaId);
      deleteManga(mangaId);
    } catch (e) {
      console.log(e);
      console.log(e.request);
      console.log(e.response);
    }
  };

  return (
    <DeleteManga>
      <DeleteIcon
        onClick={deleteMangaHandler}
        className="icon"
        fontSize="small"
      />
    </DeleteManga>
  );
}

export default DeleteMangaFavorite;
