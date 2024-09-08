//* React Import
import React, { useEffect, useState } from "react";

//* Pragmatic Drag-&-Drop Imports
import { monitorForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";

//* Custom Component Imports
import { Column } from "@/component/Column";
import {
  trelloContent,
  createDefaultTrelloBoard,
  CardContentProps,
} from "@/interface/interfaces";
import { localTrelloBoardContent } from "@/trello/api/trelloApi";
import { moveCard } from "@/trello/utils/trelloUtils";

export const TrelloBoard: React.FC = () => {
  //* use Hooks
  const [trelloContent, setTrelloContent] = useState<trelloContent>(
    createDefaultTrelloBoard()
  );

  useEffect(() => {
    localTrelloBoardContent().then((content) => {
      setTrelloContent(content);
    });
  }, []);
  useEffect(() => {
    return monitorForElements({
      onDrop({ source, location }) {
        const destination = location.current.dropTargets[0];
        if (!destination) {
          return;
        }
        const card = source.data.card as CardContentProps;
        const columnId = destination.data.columnId as number;
        setTrelloContent((trelloContent) =>
          moveCard(card, trelloContent, columnId)
        );
      },
    });
  }, [trelloContent]);
  return (
    <div
      className={`m-12 flex flex-1 gap-2 justify-evenly p-2 select-none bg-slate-400`}
    >
      {trelloContent.columns.map((data) => (
        <Column
          key={data.id}
          name={data.name}
          content={data.content}
          columnId={data.id}
        />
      ))}
    </div>
  );
};
