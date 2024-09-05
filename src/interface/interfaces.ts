export interface CardContentProps {
  card_id: string | undefined;
  card_title: string;
  card_description: string;
}

export interface ColumnContentProps {
  col_id: string | undefined;
  cards: CardContentProps[];
}
