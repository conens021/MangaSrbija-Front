import {
  CircularProgress,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { FixedSizeList } from "react-window";
import LockIcon from "@mui/icons-material/Lock";
import Link from "next/link";

function ChapterList({ chapters,width }) {
  const [rows, setRows] = useState(-1);

  useEffect(() => {
    if (chapters) {
      if (chapters.length > 0) {
        setRows(chapters.length);
        return;
      }
      setRows(0);
    }
  }, [chapters]);

  function renderRow(props) {
    const { index, style } = props;

    return (
      <Link href={`/poglavlje/${chapters[index].id}`}>
        <ListItem key={chapters[index].id} component="div" disablePadding>
          <ListItemButton>
            {chapters[index].isPrime && (
              <Fragment>
                <ListItemIcon>
                  <LockIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary={chapters[index].name} />
              </Fragment>
            )}
            {!chapters[index].isPrime && (
              <ListItemText
                sx={{ display: "flex", justifyContent: "center" }}
                primary={chapters[index].name}
              />
            )}
          </ListItemButton>
        </ListItem>
      </Link>
    );
  }

  return (
    <Paper
      elevation={3}
      sx={{
        width: "100%",
        height: "100%",
        maxWidth: width,
      }}
    >
      {rows === -1 && <CircularProgress color="secondary" />}
      {rows === 0 && <div>Nema chaptera</div>}
      {rows > 0 && (
        <FixedSizeList
          height={400}
          width="100%"
          itemSize={46}
          itemCount={rows}
          overscanCount={5}
        >
          {renderRow}
        </FixedSizeList>
      )}
    </Paper>
  );
}

export default ChapterList;
