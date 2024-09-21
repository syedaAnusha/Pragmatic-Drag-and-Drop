//* Custom Imports
import {
  CardContentProps,
  ColumnContentProps,
  trelloContent,
} from "@/interface/interfaces";
import { produce } from "immer";

type DropArgs = { columnId: number; cardId: number };

export const removeCardFromColumn = (
  card: CardContentProps,
  trelloContent: trelloContent
): trelloContent => {
  const newColumns = trelloContent.columns.map((column) => {
    const newContent = column.content.filter((c) => c.id !== card.id);
    return {
      ...column,
      content: newContent,
    };
  });
  return {
    ...trelloContent,
    columns: newColumns,
  };
};

export const dropCardAfter = (
  originCard: CardContentProps,
  destinationCardId: number,
  destinationColumn: ColumnContentProps
): ColumnContentProps => {
  return produce(destinationColumn, (draft) => {
    const index = draft.content.findIndex(
      (card) => card.id === destinationCardId
    );
    draft.content.splice(index, 0, originCard);
  });
};

export const addCardToColumn = (
  card: CardContentProps,
  dropArgs: DropArgs,
  trelloContent: trelloContent
): trelloContent => {
  const newColumns = trelloContent.columns.map((column) => {
    if (column.id === dropArgs.columnId) {
      return dropCardAfter(card, dropArgs.cardId, column);
    }
    return column;
  });
  return {
    ...trelloContent,
    columns: newColumns,
  };
};

export const moveCard = (
  card: CardContentProps,
  trelloContent: trelloContent,
  dropArgs: DropArgs
): trelloContent => {
  const newTrelloBoardContent = removeCardFromColumn(card, trelloContent);
  return addCardToColumn(card, dropArgs, newTrelloBoardContent);
};
