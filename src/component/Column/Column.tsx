//* React Import
import React from "react";

//* CardProps Import
import { CardContentProps } from "@/interface/interfaces";
import { Card } from "../Card";

//* interface ColumnProps
interface DefaultColumnProps {
  title: string;
  cardContent: CardContentProps[];
}

export const Column = ({ title, cardContent }: DefaultColumnProps) => {
  return (
    <div
      aria-label="column"
      className="w-[25%] border-2 rounded-md bg-slate-300 p-2.5 flex flex-col gap-2"
    >
      <h1 aria-label="column-title" className="text-center text-[1.2rem]">
        {title}
      </h1>
      {cardContent.map((card) => (
        <>
          <Card content={card} />
        </>
      ))}
    </div>
  );
};
