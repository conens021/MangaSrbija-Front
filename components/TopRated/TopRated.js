import { Paper } from "@mui/material";
import MangaListGrid from "../UI/MangaList/MangaListGrid";

function TopRated({ data }) {
  return (
    <Paper
      elevation={3}
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        rowGap: "1em",
        padding: "1.5em 1em",
      }}
    >
      <h2>Visoko Ocenjene Mange</h2>
      <MangaListGrid mangas={data} />
    </Paper>
  );
}

export default TopRated;
