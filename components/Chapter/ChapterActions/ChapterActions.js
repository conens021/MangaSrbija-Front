import { Box, Button } from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import ChapterDropdown from "./ChapterDropdown";
import PageDropdown from "./PageDropdown";
import { Fragment, useState } from "react";
import { useRouter } from "next/router";

function ChapterActions({ mangaChapters, chapter,hideDropdown }) {
  const chapters = [...mangaChapters];

  const [orderedChapters, setOrderedChapters] = useState(chapters.reverse());

  const router = useRouter();

  const isFirstChapter = chapter.id !== orderedChapters[0].id;
  const isLastChapter = chapter.id !== orderedChapters.at(-1).id;

  const nextChapter = () => {
    const isCurrentChapter = (element) => element.id === chapter.id;

    const currentChapterIndex = orderedChapters.findIndex(isCurrentChapter);

    const nextElement = orderedChapters[currentChapterIndex + 1];

    router.push(`/poglavlje/${nextElement.id}`);
  };

  const previusChapter = () => {
    const isCurrentChapter = (element) => element.id === chapter.id;

    const currentChapterIndex = orderedChapters.findIndex(isCurrentChapter);

    const previusElement = orderedChapters[currentChapterIndex - 1];

    router.push(`/poglavlje/${previusElement.id}`);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Button
        sx={{ visibility: isFirstChapter ? "visible" : "hidden" }}
        onClick={previusChapter}
        color="secondary"
        startIcon={<DoubleArrowIcon sx={{ transform: "rotate(180deg)" }} />}
      >
        Prethodno poglavlje
      </Button>

      <Box
        sx={{
          flex: "1",
          display: "flex",
          columnGap: ".5em",
          justifyContent: "center",
        }}
      >
        {!hideDropdown && (
          <Fragment>
            <ChapterDropdown chapter={chapter} mangaChapters={mangaChapters} />
            <PageDropdown />
          </Fragment>
        )}
      </Box>

      <Button
        sx={{ visibility: isLastChapter ? "visible" : "hidden" }}
        onClick={nextChapter}
        color="secondary"
        endIcon={<DoubleArrowIcon />}
      >
        Sledece poglavlje
      </Button>
    </Box>
  );
}

export default ChapterActions;
