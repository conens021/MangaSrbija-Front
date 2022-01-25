import { Paper } from "@mui/material";
import MangaListWide from "../UI/MangaList/MangaListWide";

function RecentlyAdded(props) {
  return (
    <Paper
      elevation={3}
      sx={{
        display: "flex",
        flexDirection: "column",
        rowGap: "1em",
        padding:'1.5em 1em',
        overflow:'hidden',
        width:'3000px'
      }}
    >
      <h2>Nedavno Dodato</h2>
      <MangaListWide mangas={props.data} />
    </Paper>
  );
}

export default RecentlyAdded;
