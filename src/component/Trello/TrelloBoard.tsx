//* React Import
import { useEffect, useState } from "react";

//* Custom Component Imports
import { Column } from "@/component/Column";
import {
  trelloContent,
  createDefaultTrelloBoard,
} from "@/interface/interfaces";
import { localTrelloBoardContent } from "@/trello/api/trelloApi";

export const TrelloBoard = () => {
  //* use Hooks
  const [trelloContent, setTrelloContent] = useState<trelloContent>(
    createDefaultTrelloBoard()
  );

  useEffect(() => {
    localTrelloBoardContent().then((content) => setTrelloContent(content));
  }, []);
  return (
    <div
      className={`m-12 flex flex-1 gap-2 justify-evenly p-2 select-none bg-slate-400`}
    >
      {trelloContent.columns.map((data) => (
        <Column
          key={data.col_id}
          title={data.col_title}
          cardContent={data.cards}
        />
      ))}
    </div>
  );
};
