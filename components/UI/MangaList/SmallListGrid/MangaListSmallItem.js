import Image from "next/image";
import { Paper } from "@mui/material";
import { IMAGES_FOLDER } from "../../../../api/constants";

function MangaListSmallItem({ manga,styles }) {
  const src = IMAGES_FOLDER + "/" + manga.coverPhoto;
  return (
    <Paper
      key={manga.id}
      elevation={3}
      sx={{ padding: ".7em", display: "flex", alignItems: "stretch" }}
      className={styles.mangaSingleItem}
    >
      <Image loader={() => src} src={src} height={80} width={50} />
      <div style={{flex:'1'}}>
        <div>{manga.title}</div>
      </div>
    </Paper>
  );
}

export default MangaListSmallItem;
