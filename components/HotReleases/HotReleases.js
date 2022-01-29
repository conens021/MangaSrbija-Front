import { Paper } from "@mui/material";
import ChapterListWide from "../UI/ChapterList/ChapterListWide";

function HotReleases(props) {
  return (
    <Paper
      elevation={3}
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        rowGap: "1em",
        padding:'1.5em 1em'
      }}
    >
      <h2>Poslednja Izdanja</h2>
      <ChapterListWide chapters={props.data} />
    </Paper>
  );
}

export default HotReleases;
