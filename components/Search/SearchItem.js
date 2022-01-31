import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import { imageLoader } from "../../helpers/imageLoader";

function SearchItem({ item, styles, query }) {
  const isQueryInTitle =
    item.title.toLowerCase().indexOf(query.toLowerCase()) === -1 ? false : true;
  const summaryQueryStartingIndex = isQueryInTitle
    ? 0
    : item.summary.toLowerCase().indexOf(query.toLowerCase());

  return (
    <Link href={`/manga/${item.id}`} >
      <Paper elevation={3} className={styles.searchItem}>
        <Image
          src={`${item.coverPhoto}`}
          height={70}
          width={50}
          loader={imageLoader}
        />
        <Box className={styles.searchItemInfo}>
          <Typography variant="body1">{item.title}</Typography>
          <Typography variant="body2" style={{ color: "gray" }}>
            {item.summary.slice(
              summaryQueryStartingIndex,
              summaryQueryStartingIndex + 52
            )}
          </Typography>
        </Box>
      </Paper>
    </Link>
  );
}

export default SearchItem;
