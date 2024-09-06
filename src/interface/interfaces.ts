//* interfaces
export interface CardContentProps {
  card_id: string | undefined;
  card_title: string;
  card_description: string;
}

export interface ColumnContentProps {
  col_id: string | undefined;
  col_title: string;
  cards: CardContentProps[];
}

export interface trelloContent {
  columns: ColumnContentProps[];
}

//* By calling this function, it instantiates & return a defaultTrelloBoard with colums:[]
export const createDefaultTrelloBoard = (): trelloContent => ({ columns: [] });
