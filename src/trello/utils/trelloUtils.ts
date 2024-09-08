//* Custom Imports
import {
  CardContentProps,
  ColumnContentProps,
  trelloContent,
} from "@/interface/interfaces";
import { produce } from "immer";

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
  if (destinationCardId === -1) {
    return produce(destinationColumn, (draft) => {
      draft.content.push(originCard);
    });
  }
  return produce(
    destinationColumn,
    (draft: { content: CardContentProps[] }) => {
      const index = draft.content.findIndex(
        (card: { id: number }) => card.id === destinationCardId
      );
      draft.content.splice(index, 0, originCard);
    }
  );
};

export const addCardToColumn = (
  card: CardContentProps,
  columnId: number,
  trelloContent: trelloContent
): trelloContent => {
  const newColumns = trelloContent.columns.map((column) => {
    if (column.id === columnId) {
      return dropCardAfter(card, -1, column);
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
  destinationColumnId: number
): trelloContent => {
  const newTrelloBoardContent = removeCardFromColumn(card, trelloContent);
  return addCardToColumn(card, destinationColumnId, newTrelloBoardContent);
};
