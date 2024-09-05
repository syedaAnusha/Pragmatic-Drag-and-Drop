//* React Import
import React from "react";

//* CardProps Import
import { ColumnContentProps } from "@/interface/interfaces";
import { Card } from "../Card";

export const Column = ({ col_title, cards }: ColumnContentProps) => {
  return (
    <div
      aria-label="column"
      className="w-[25%] border-2 rounded-md bg-slate-300 p-2.5 flex flex-col gap-2"
    >
      <h1 aria-label="column-title" className="text-center text-[2rem]">
        {col_title}
      </h1>
      {cards.map((card) => (
        <>
          <Card
            card_id={card.card_id}
            card_title={card.card_title}
            card_description={card.card_description}
          />
        </>
      ))}
    </div>
  );
};
