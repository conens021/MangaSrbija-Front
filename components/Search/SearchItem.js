import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

import { IMAGES_FOLDER } from "../../api/constants";

const myLoader = ({ src, width, quality }) => {
  return `${IMAGES_FOLDER}/${src}?w=${width}&q=${quality || 75}`;
};

function SearchItem({ item, styles, query }) {
  const isQueryInTitle =
    item.title.toLowerCase().indexOf(query.toLowerCase()) === -1 ? false : true;
  const summaryQueryStartingIndex = isQueryInTitle
    ? 0
    : item.summary.toLowerCase().indexOf(query.toLowerCase());
  console.log(summaryQueryStartingIndex);
  console.log(item.summary.slice(summaryQueryStartingIndex));

  return (
    <Link href={`/manga/${item.id}`} >
      <Paper elevation={3} className={styles.searchItem}>
        <Image
          src={`${item.coverPhoto}`}
          height={90}
          width={60}
          loader={myLoader}
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
