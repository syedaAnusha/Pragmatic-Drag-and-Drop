/* eslint-disable @typescript-eslint/no-unused-vars */
//* React Import
import React from "react";

//* CardProps Import
import { CardContentProps } from "@/interface/interfaces";
import { Card } from "../Card";
import { EmptyDropZone } from "../Empty-Space-Drop-Zone";

//* interface ColumnProps
interface ColumnProps {
  columnId: number;
  name: string;
  content: CardContentProps[];
}

export const Column = ({ columnId, name, content }: ColumnProps) => {
  return (
    <div
      aria-label="column"
      className={`w-[25%] border-2 rounded-md p-2.5 flex flex-col gap-2 `}
    >
      <h1 aria-label="column-title" className="text-center text-[2rem]">
        {name}
      </h1>
      {content.map((card) => (
        <Card key={card.id} content={card} columnId={columnId} />
      ))}
      <EmptyDropZone columnId={columnId} />
    </div>
  );
};
