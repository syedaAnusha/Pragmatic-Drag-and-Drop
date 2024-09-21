//* interfaces
export interface CardContentProps {
  id: number;
  title: string;
  description: string;
}

export interface ColumnContentProps {
  id: number;
  name: string;
  content: CardContentProps[];
}

export interface trelloContent {
  columns: ColumnContentProps[];
}

//* By calling this function, it instantiates & return a defaultTrelloBoard with colums:[]
//* Factory pattern
export const createDefaultTrelloBoard = (): trelloContent => ({ columns: [] });
